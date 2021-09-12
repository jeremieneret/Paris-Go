import { Fragment, React, useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';
import search from '../assets/search.png';
import { SEARCH_EVENTS } from '../tools/api';

const SearchEvent = () => {

    const [searchInputText, setSearchInputText] = useState([]);
    const [data, setData] = useState();

    useEffect(() => {

        const onSearchEvent = async () => {
            const result = await axios(
                `${SEARCH_EVENTS}${searchInputText}`
            );
            setData(result.data.records);


        }
        onSearchEvent();

    }, [searchInputText])

    console.log(data);





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
                    <img className='search-icon' src={search} alt="icone de recherche" />
                    <input
                        className='search-input'
                        onChange={e => setSearchInputText(e.target.value)}
                        value={searchInputText}
                        type='text'
                        placeholder="expo, Paris 15e, Gaîté Lyrique, féminisme..."
                    />
                </div>


                <ul className='display-event-cards'>
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
                                        tags: event.record.fields.tags,
                                        lead_text: event.record.fields.lead_text,
                                    }}
                                ></EventCard>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </Fragment>
    )
}

export default SearchEvent;