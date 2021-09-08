import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import coeur_inactive from '../assets/coeur_inactive.png';
import DisplayColors from './DisplayColors';



export default function EventCard({ event, color }) {

    return (
        <Fragment>
            <div className='card'>
                <DisplayColors
                    i={event.i}
                />
                <div className='text'>
                    <div className='favori__ctnr'>
                        <p className='tags'>#{event.tags}</p>
                        <img className='favori' src={coeur_inactive} alt='favori' />
                    </div>
                    <h1 className='title'>{event.title}</h1>
                    <p className='date'>{parse(event.date)}</p>
                    <p className="description">{parse(event.lead_text)}</p>
                </div>
            </div>
        </Fragment>
    )
}
