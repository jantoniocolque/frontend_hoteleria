import React,{useEffect, useState,useContext} from 'react'
import jwtDecode from 'jwt-decode'
import FavoriteContext from './favoriteContext';
import { useLocalStorage } from "../hooks/useLocalStorage";
const Context = React.createContext({})

export function SessionContextProvider({children}) {
    const [productsFavoritesLS, setProductsFavoritesLS] = useLocalStorage("productsFavorites", []);
    const [userLS, setUserLS] = useLocalStorage("user", []);
    const {favorites,setFavorites} = useContext(FavoriteContext)
    const [token,setToken] = useState(userLS !==[] ? userLS.myToken : null)
    const [user, setUser] = useState(null)
    useEffect(()=>{
        if(token !== null && token !== undefined){
            var decoded = jwtDecode(token);
            fetch(`http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/user/${decoded.jti}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setUserLS({
                    id:data.userId,
                    name:data.name,
                    surname:data.surname,
                    email:data.email,
                    myToken:token
                })
            })
            fetch(`http://localhost:8080/api/v1/favorite/user/${decoded.jti}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => {
                    if (res.status >= 400 && res.status < 500) {
                        return Promise.reject(new Error("No existe un usuario con esa identificacion"))
                    }
                    if (res.status >= 500) {
                        return Promise.reject(new Error("Lamentablemente no ha podido guardar el estado. Porfavor intentelo mas tarde"))
                    }
                    return res.json()
                })
                .then(data => {
                        let aux = data.length > 0 ? data.map(d => d.product.productId) : [];
                        favorites.forEach((f,j)=>{
                            if(!aux.includes(f)){
                                fetch("http://localhost:8080/api/v1/favorite", {
                                        method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                "Authorization": `Bearer ${token}`
                                            },
                                            body: JSON.stringify({
                                                product: { productId: f },
                                                user: { userId: decoded.jti }
                                            })
                                        })
                                        .then(res => {
                                            if (res.status >= 400 && res.status < 500) {
                                                return Promise.reject(new Error("El favorito que quiere registrar ya existe en la base de datos"))
                                            }
                                            if (res.status >= 500) {
                                                return Promise.reject(new Error("Lamentablemente no ha podido cambiar su estado. Porfavor intentelo mas tarde"))
                                            }
                                            return res.text()
                                        })
                                        .then(data => {
                                            aux = [...aux,f]
                                            setFavorites(aux);
                                            setProductsFavoritesLS(aux);
                                        }).catch(error => console.log(error))
                            }
                        })
                        setFavorites(aux);
                        setProductsFavoritesLS(aux);
                }).catch(error => console.log(error))
        }else{
            setUser(null)
        }
    },[token])
    
    return <Context.Provider value={{user,token, setToken,setUser}}>
        {children}
    </Context.Provider>
}

export default Context;