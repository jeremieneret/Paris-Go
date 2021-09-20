import axios from 'axios';
import { Fragment, React, useEffect, useState } from 'react';
import { GET_LAST_EVENT } from '../tools/api';

import EventCard from '../components/EventCard';


//we use useState to create a variable 'data' and a function 'setData' to update the state of 'data'. We initialize the state of 'data' as an empty array.
const Home = () => {
    const [data, setData] = useState([]);

    //we use useEffect to fetch datas from the api and set the result in the 'data' array
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
                        <h1>À toi les meilleures idées de sorties !</h1>
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
                        <h1>C'est tout <span>frais :</span></h1>
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