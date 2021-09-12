import React, { useContext } from 'react';
import { StyleContext } from '../contexts/StyleContext';

const StyleToggleBtn = () => {
    const { style, dispatch } = useContext(StyleContext);
    return (
        <div>
            <button 
                onClick={() => dispatch({})}
                style={style.background}
            >Clikkk</button>
        </div>
    )
}

export default StyleToggleBtn 