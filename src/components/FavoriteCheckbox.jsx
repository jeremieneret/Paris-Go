import React, { useState, Fragment, useEffect } from 'react';
import { updateStorage } from '../tools/updateStorage';

const FavoriteCheckbox = ({ event }) => {
    //we initialize the state of "checked" at false and setChecked will allow us to make the boolean change
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        // here we get datas from the local storage
        const storedIds = window.localStorage.getItem("paris-events-favorites");
        //we stock this datas into an array
        let storageArray = [];
        if (storedIds) {
            storageArray = JSON.parse(storedIds);
        }
        //then we check if the array includes the id of the event
        if (storageArray.includes(event.id)) {
            setChecked(true);
        }
    }, [event.id])

    return (
        <Fragment>

            {/* if 'checked' is true, then we display the true color (pink), if not, we display the false one (grey) */}
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
