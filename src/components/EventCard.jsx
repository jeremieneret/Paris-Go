import React, { Fragment } from 'react';

export default function EventCard({event}) {
    return (
        <Fragment>
            <div className='card'>
                <img className='cover' src={event.cover} alt='cover' />
                <div className='text'>
                    <p className='tags'>#{event.tags}</p>
                    <div className='title-favori__ctnr'>
                        <h1 className='title'>{event.title}</h1>
                        <img className='favori' src={event.coeur_inactive} alt='favori' />
                    </div>
                    <p className='date'>{event.date}</p>
                    <p className="description">{event.description}</p>
                </div>
            </div>
        </Fragment>
    )
}
