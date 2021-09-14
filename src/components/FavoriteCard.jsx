import React, { Fragment } from 'react'
import FavoriteCheckbox from './FavoriteCheckbox';

const FavoriteCard = ({ event }) => {
    return (
        <Fragment>
            <FavoriteCheckbox
                event={{
                    id: event.id,
                }}
            />
        </Fragment>
    )
}

export default FavoriteCard;
