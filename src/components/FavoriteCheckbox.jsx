import React, { useState, Fragment, useEffect } from 'react';
import { updateStorage } from '../tools/updateStorage';


const FavoriteCheckbox = ({ event }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        //on stocke les données présentes dans l'espace créé dans le local
        //storage "deezweb_jrm" dans une constante.
        const storedIds = window.localStorage.getItem("paris-events-favorites");
        //on crée un tableau vide.
        let storageArray = [];
        //quand le tableau comportera des données, elles seront converties en JSON.
        if (storedIds) {
            storageArray = JSON.parse(storedIds);
        }
        if (storageArray.includes(event.id)) {
            setChecked(true);
        }
    }, [event.id])

    return (
        <Fragment>
                            {checked &&
                                <input
                                    type="checkbox"
                                    className='favorite-truecolor'
                                    checked={checked}
                                    onChange={e => setChecked(e.target.checked)}
                                    onClick={() => {
                                        updateStorage(event.id)
                                    }}
                                />}

                            {!checked &&
                                <input
                                    type="checkbox"
                                    className='favorite-falsecolor'
                                    checked={checked}
                                    onChange={e => setChecked(e.target.checked)}
                                    onClick={() => {
                                        updateStorage(event.id)
                                    }}
                                />}
        </Fragment>
    )
}

export default FavoriteCheckbox;
