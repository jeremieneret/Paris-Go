import React, { createContext, useReducer, useEffect } from 'react';
import { favoriteReducer } from '../reducers/favoriteReducer';

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
    const [favorites, dispatch] = useReducer(favoriteReducer, [], () => {
        const localData = localStorage.getItem('paris-events-favorites');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('paris-events-favorites', JSON.stringify(favorites));
    }, [favorites])
    return (
        <FavoritesContext.Provider value={{ favorites, dispatch }}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;

