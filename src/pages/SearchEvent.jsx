import { Fragment, React, useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';
import search from '../assets/search.png';
import { SEARCH_EVENTS } from '../tools/api';


const SearchEvent = () => {

    const [searchInputText, setSearchInputText] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {

        const onSearchEvent = async () => {
            if (searchInputText) {
                const result = await axios(
                    `${SEARCH_EVENTS}${searchInputText}`
                );
                setData(result.data.records);
            }
            else {
                setData(null)
            }
        }
        onSearchEvent();

    }, [searchInputText])

    return (
        <Fragment>
            <main>
                <div className="presentation__ctnr">
                    <div className="presentation">
                        <h1>Écris dans la barre ci-dessous pour rechercher un événement.</h1>
                    </div>
                    <div className="presentation">
                        <h2>Tape une requête précise...</h2>
                    </div>
                    <div className="presentation">
                        <h2>ou laisse libre-court à ton inspiration !</h2>
                    </div>
                    <div className="presentation">
                        <h2>La barre est sympa, elle te donne des exemples.</h2>
                    </div>
                </div>

                <div className="search-input__ctnr">
                    <div id="magnifying-glass"></div>
                    <input
                        className='search-input'
                        onChange={e => setSearchInputText(e.target.value)}
                        value={searchInputText}
                        type='text'
                        placeholder="expo, Paris 15e, Gaîté Lyrique, féminisme..."
                    />
                </div>


                {data && data.length !== 0 && <ul className='display-event-cards'>
                    {data?.map((event, i) => {
                        return (
                            <li key={i}>
                                <EventCard
                                    event={{
                                        i: i,
                                        id: event.record.id,
                                        title: event.record.fields.title,
                                        cover: event.record.fields.cover_url,
                                        description: event.record.fields.description,
                                        date: event.record.fields.date_description,
                                        lead_text: event.record.fields.lead_text,
                                    }}
                                ></EventCard>
                            </li>
                        )
                    })}
                </ul>}
                {data && data.length === 0 && <div className='message'>
                    <h2>Ta recherche est vraiment trop personnelle... </h2>
                    <h2>Essaie autre chose !</h2>
                </div>}

            </main>
        </Fragment>
    )
}

export default SearchEvent;