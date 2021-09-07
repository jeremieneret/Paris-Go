import { Fragment, React, useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';



export default function DisplayEventCards() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type&facet=description'
            );
            setData(result.data.records);
        }
        fetchData();
    }, [])

    console.log(data);
    return (
        <Fragment>
            <ul>
                {data?.map((event, i) => {

                    return (
                        <li key={i}>
                            <EventCard
                                event={{
                                    id: event.fields.id,
                                    title: event.fields.title,
                                    cover: event.fields.cover_url,
                                    description: event.fields.description,
                                    date: event.fields.date_description,
                                    tags: event.fields.tags,
                                    lead_text: event.fields.lead_text
                                }}
                            ></EventCard>

                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}
