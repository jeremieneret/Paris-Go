import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import DisplayColors from '../tools/DisplayColors';
import { useHistory } from 'react-router';
import FavoriteCheckbox from './FavoriteCheckbox';

const EventCard = ({ event }) => {

    const history = useHistory();

    return (
        <Fragment>
            <div className="card-and-cover__ctnr">
                <img className='cover' src={event.cover} alt="événement" />
                <div className='card'>
                    <DisplayColors
                        i={event.i}
                    />
                    <div className='text'>
                        <div className='favori__ctnr'>
                            <p className='tags'>#{event.tags}</p>
                            <FavoriteCheckbox
                                event={{
                                    id: event.id,
                                }}
                            />
                        </div>
                        <button
                            onClick={() => { history.push(`/EventDetails/${event.id}`) }}
                        >
                            <h1 className='title'>{event.title}</h1>
                        </button>
                        <p className='date'>{parse(event.date)}</p>
                        <p className="description">{parse(event.lead_text)}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EventCard;