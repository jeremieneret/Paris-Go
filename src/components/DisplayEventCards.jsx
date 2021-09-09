import { Fragment, React, useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';



export default function DisplayEventCards() {
    const [data, setData] = useState();

    useEffect(() => {
        const onSearchEvent = async () => {
            const result = await axios(
                'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=tout&order_by=updated_at&limit=30'
            );
            setData(result.data.records);
        }
        onSearchEvent();
    }, [])

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
                                    id: event.record.fields.id,
                                    title: event.record.fields.title,
                                    cover: event.record.fields.cover_url,
                                    description: event.record.fields.description,
                                    date: event.record.fields.date_description,
                                    tags: event.record.fields.tags,
                                    lead_text: event.record.fields.lead_text
                                }}
                            ></EventCard>

                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}
