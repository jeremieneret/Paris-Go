import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import coeur_inactive from '../assets/coeur_inactive.png';
import DisplayColors from '../tools/DisplayColors';
import { useHistory } from 'react-router';

export default function EventCard({ event }) {

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
                        <p>id = {event.id}</p>
                        <div className='favori__ctnr'>
                            <p className='tags'>#{event.tags}</p>
                            <img className='favori' src={coeur_inactive} alt='favori' />
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
