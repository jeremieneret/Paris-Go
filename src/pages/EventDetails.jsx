import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import FavoriteCheckbox from '../components/FavoriteCheckbox';
import { GET_EVENT_BY_ID } from '../tools/api';
import facebook from '../assets/facebook.svg';
import phone from '../assets/phone.svg';

const EventDetails = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${GET_EVENT_BY_ID}${id}`
            )
            setData(result.data.record);
        }
        fetchData();
    }, [id])

    return (
        <Fragment>
            {data &&
                <main id='event-details'>

                    <div className="event-details__card main__card">
                        <div className="img-and-title__ctnr">
                            <img className='cover-xl' src={data.fields.cover_url} alt="cover" />
                            <h1>{data.fields.title}</h1>
                        </div>
                    </div>

                    <div className="event-details__card__ctnr">

                        <div className="event-details__card description__card side-by-side__card">
                            {parse(data.fields.description)}
                        </div>

                        <div className="event-details__card side-by-side__card">

                            <div className="block">
                                <h2>Infos :</h2>
                                <p className='date'>{parse(data.fields.date_description)}</p>
                                {data.fields.price ? <p className='price'>{data.fields.price}</p> : <p className='price'>Gratuit</p>}
                            </div>

                            <div className="block">
                                <h2>Lieu :</h2>
                                <div className="miniblock">
                                    <p className='address-name'>{data.fields.address_name}</p>
                                    <p className='infos'>{data.fields.address_street}</p>
                                    <p className='infos'>{data.fields.address_zipcode}</p>
                                    <p className='infos'>{data.fields.address_city}</p>
                                </div>

                                {data.fields.transport ?
                                    <div className="miniblock">
                                        <p className='transport'>Transport :</p>
                                        <p className='infos'>{data.fields.transport}</p>
                                    </div>
                                    :
                                    <div></div>}
                            </div>

                            {data.fields.contact_facebook || data.fields.contact_phone ?
                                <div className="block">
                                    <h2>Contact :</h2>
                                    {data.fields.contact_facebook ?
                                        <div className="inline-infos">
                                            <img src={facebook} alt="facebook" />
                                            <a href={data.fields.contact_facebook} className='infos' target='_blank' rel="noreferrer">{data.fields.contact_facebook}</a>
                                        </div>
                                        :
                                        <div></div>
                                    }
                                    {data.fields.contact_phone ?
                                        <div className="inline-infos">
                                            <img src={phone} alt="téléphone" />
                                            <p className='infos'>{data.fields.contact_phone}</p>
                                        </div>
                                        :
                                        <div></div>
                                    }
                                </div>
                                :
                                <div></div>
                            }

                            <div className='block'>
                                <h2>Ajouter aux favoris :</h2>
                                <FavoriteCheckbox
                                    event={{
                                        id: id,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </main>}
        </Fragment>
    )
}

export default EventDetails
