import axios from 'axios';
import { Fragment, React, useEffect, useState } from 'react';
import { GET_LAST_EVENT } from '../tools/api';

import EventCard from '../components/EventCard';



const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                GET_LAST_EVENT)
            setData(result.data.records)
        }
        fetchData();
    }, [])
    

    return (
        <Fragment>
            <main className="home">
                <div className="presentation__ctnr">
                    <div className="presentation">
                        <h1>À toi les meilleures idées de sorties !</h1>
                    </div>
                    <div className="presentation">
                        <h2>Soit le premier au courant du dernier événement publié sur cette page, ou bien utilise la page Recherche, pour une recherche d'événement plus spécifique.</h2>
                    </div>
                    <div className="presentation">
                        <h2>Constitue ton carnet de sorties en cliquant sur les coeurs et retrouve ta liste dans la page Favoris !</h2>
                    </div>
                    <div className="presentation">
                        <h2>Allez, go !</h2>
                    </div>
                </div>
                <div className="home-content__ctnr">
                    <div className="actu-title">
                        <h1>C'est tout frais :</h1>
                    </div>
                    <div className='display-event-cards'>
                        {data?.map((event, i) => {

                            return (
                                <div key={i}>
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
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Home;