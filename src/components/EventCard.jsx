import { React, useEffect, useState } from 'react';
import axios from 'axios';


function EventCard() {
    const [cover, setCover] = useState();
    const [tag, setTag] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type&facet=description'
            );
            const regex = /<br \/>/g;
            const str = result.data.records[0].fields.date_description;
            const subst = ` `;
            const frDate = str.replace(regex, subst);

            const regex2 = /<\/p><p><\/p><p>|<p>|<\/p>/g;
            const str2 = result.data.records[0].fields.description;
            const subst2 = `\r`;

            const frDescription = str2.replace(regex2, subst2);

            console.log('Substitution result: ', frDescription);


            setCover(result.data.records[0].fields.cover_url);
            setTag(result.data.records[0].fields.tags);
            setTitle(result.data.records[0].fields.title);
            setDate(frDate);
            setDescription(frDescription);
            console.log(result.data.records[0].fields);

        }
        fetchData();
    }, [])
    return (
        <div className="EventCard">
            <img src={cover} alt='cover' />
            <p className='tag'>#{tag}</p>
            <h1 className='title'>{title}</h1>
            <p className='date'>{date}</p>
            <p className="description">{description}</p>
        </div>
    );
}

export default EventCard;