import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Fragment } from "react/cjs/react.production.min";
import { GET_EVENT_BY_ID } from "../tools/api";
import EventCard from "./EventCard";

const Favorites = () => {
    const recup = localStorage.getItem('paris-events-favorites');
    // const ids = recup.replace('/"/gm')

    let idsArray = recup ? JSON.parse(recup) : [];
    // console.log(idsArray);


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

    useEffect(() => {
        promise.then(data => {
            setData(data)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(data);



    return (
        <Fragment>
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
        </Fragment>
    )
}


export default Favorites