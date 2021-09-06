import { Fragment, React, useEffect, useState } from 'react';
import axios from 'axios';
// import coeur from '../assets/coeur.png';
import coeur_inactive from '../assets/coeur_inactive.png';


//This function will fetch general infos about parisian events, to display them in a card.
function EventCard() {
    //We declare every infos we need and initialize their state 
    const [cover, setCover] = useState();
    const [tag, setTag] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();

    //Then we fetch datas
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type&facet=description'
            );

            //We need this to format date 
            const regex = /<br \/>/g;
            const str = result.data.records[0].fields.date_description;
            const subst = ` `;
            const frDate = str.replace(regex, subst);

            //We need this top format description
            const regex2 = /<\/p><p><\/p><p>|<p>|<\/p>/g;
            const str2 = result.data.records[0].fields.description;
            const subst2 = `\r`;
            const frDescription = str2.replace(regex2, subst2);

            //We set everything where needed
            setCover(result.data.records[0].fields.cover_url);
            setTag(result.data.records[0].fields.tags);
            setTitle(result.data.records[0].fields.title);
            setDate(frDate);
            setDescription(frDescription);

        }
        fetchData();
    }, [])
    return (
        <Fragment>
            <div className='card'>
                <img className='cover' src={cover} alt='cover' />
                <div className='text'>
                    <p className='tag'>#{tag}</p>
                    <div className='title-favori__ctnr'>
                        <h1 className='title'>{title}</h1>
                        <img className='favori' src={coeur_inactive} alt='favori' />
                    </div>
                    <p className='date'>{date}</p>
                    <p className="description">{description}</p>
                </div>
            </div>
        </Fragment>

    );
}

export default EventCard;