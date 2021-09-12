import React, { createContext } from 'react';
import { useReducer } from 'react/cjs/react.development';
import { StyleReducer } from '../reducers/StyleReducer';

export const StyleContext = createContext();

const StyleContextProvider = (props) => {
    const [style, dispatch] = useReducer(StyleReducer)
    return (
        <StyleContext.Provider value={{ style, dispatch }}>
            {props.children}
        </StyleContext.Provider>
    )
}

export default StyleContextProvider
