import getData from "../assets/js/getData"
import { useEffect, useState, useContext } from "react"
import Card from "../components/Recomendations/Card"
import "./FavoritePage.css";
import FavoriteContext from "../context/favoriteContext"
import SessionContext from "../context/sessionContext"
import ContentLoader from 'react-content-loader';
export default function FavoritePage() {
    const { user, token } = useContext(SessionContext)
    const { favorites, setFavorites } = useContext(FavoriteContext)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const handleToggleAction = () => {
        fetch(`http://localhost:8080/api/v1/favorite/user/${user.userId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.status >= 400 && res.status < 500) {
                    return Promise.reject(new Error("El usuario con esa identificacion no existe"))
                }
                if (res.status >= 500) {
                    return Promise.reject(new Error("Lamentablemente no ha podido registrarse. Porfavor intentelo mas tarde"))
                }
                return res.json()
            })
            .then(data => {
                setProducts(data)
                setIsLoading(false);
            }).catch(error => console.log(error))

    }
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/favorite/user/${user.userId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.status >= 400 && res.status < 500) {
                    return Promise.reject(new Error("El usuario con esa identificacion no existe"))
                }
                if (res.status >= 500) {
                    return Promise.reject(new Error("Lamentablemente no ha podido registrarse. Porfavor intentelo mas tarde"))
                }
                return res.json()
            })
            .then(data => {
                setProducts(data)
                setIsLoading(false);
            }).catch(error => console.log(error))
    }, [])
    return (
        <div className="favorites">
            <div className="wrapper">
                <div className="content-superior">
                    <h1>Tus favoritos</h1>
                    <div className="cards">
                        {
                            isLoading ?
                                <>
                                    <ContentLoader
                                        width={700}
                                        height={300}
                                        viewBox="0 0 700 300"
                                        backgroundColor="#f5f5f5"
                                        foregroundColor="#dbdbdb"
                                    >
                                        <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
                                        <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
                                        <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
                                        <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
                                        <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
                                        <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
                                        <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
                                        <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
                                        <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
                                        <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
                                        <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
                                        <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
                                        <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
                                    </ContentLoader>
                                    <ContentLoader
                                        width={700}
                                        height={300}
                                        viewBox="0 0 700 300"
                                        backgroundColor="#f5f5f5"
                                        foregroundColor="#dbdbdb"
                                    >
                                        <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
                                        <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
                                        <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
                                        <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
                                        <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
                                        <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
                                        <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
                                        <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
                                        <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
                                        <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
                                        <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
                                        <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
                                        <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
                                    </ContentLoader>
                                </>
                                :
                                products.length > 0 ?
                                    products.map((product) => {
                                        return <Card key={product.favoriteId} card={product.product} handleToggleAction={handleToggleAction} setIsLoading={setIsLoading} />
                                    })
                                    :
                                    <h3>No tienes favoritos</h3>

                        }

                    </div>
                </div>
            </div>
        </div>

    )
}