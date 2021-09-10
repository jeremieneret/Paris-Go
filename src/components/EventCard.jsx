import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import coeur_inactive from '../assets/coeur_inactive.png';
import DisplayColors from './DisplayColors';

export default function EventCard({ event }) {

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
                            <img className='favori' src={coeur_inactive} alt='favori' />
                        </div>
                        <button
                            onClick={() => event.click}
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
