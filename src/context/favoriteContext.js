import React ,{useState}from 'react';

const Context = React.createContext({}); 

export function FavoriteContextProvider({children}){
    const [favorites,setFavorites] = useState([]);

    return <Context.Provider value={{favorites,setFavorites}}>
        {children}
    </Context.Provider>
}

export default Context;