import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Fragment } from "react/cjs/react.production.min";
import { GET_EVENT_BY_ID } from "../tools/api";
import EventCard from "../components/EventCard";

//we get the datas from localStorage, parse them and put them into an array
const Favorites = () => {
    const recup = localStorage.getItem('paris-events-favorites');
    let idsArray = recup ? JSON.parse(recup) : [];

    //on a first step, we use a Promise method to fetch data from the api and put them into a new array, created by the mapping of the initial one
    function fetchData() {
        return Promise.all(
            idsArray.map((id) => axios.get(`${GET_EVENT_BY_ID}${id}`)
                .then((response) => response.data))
        ).then((newIdsArray) => {
            return newIdsArray;
        })
    }
    const promise = fetchData();
    const [data, setData] = useState([]);

    //then in a second step, we use UseEffect to set the datas in the 'data' variable that we will use below
    useEffect(() => {
        promise.then(data => {
            setData(data)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Fragment>
            <main>
                {data && data.length !== 0 &&
                    <ul className='display-event-cards'>
                        {data?.map((event, i) => {
                            return (
                                <li key={i}>
                                    {/* here we are giving to the EventCard the datas needed, using props */}
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
                {data.length === 0 &&
                    <div>
                        <div className='message'>
                            <h2>Tu n'as pas encore de favoris.</h2>
                            <h2>Ou peut-être que tu n'aimes rien.</h2>
                            <h2>Après tout, tu es parisien.</h2>
                        </div>
                    </div>
                }
            </main>
        </Fragment>
    )
}


export default Favorites