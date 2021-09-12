import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GET_EVENT_BY_ID } from '../tools/api';
import parse from 'html-react-parser';
import facebook from '../assets/facebook.svg';
import phone from '../assets/phone.svg';


export default function EventDetails() {
    const { id } = useParams();
    const [title, setTitle] = useState([]);
    const [cover, setCover] = useState([]);
    const [description, setDecription] = useState([]);
    const [date, setDate] = useState([]);
    const [price, setPrice] = useState([]);
    const [address_name, setAddress_name] = useState([]);
    const [address_street, setAddress_street] = useState([]);
    const [address_zipcode, setAddress_zipcode] = useState([]);
    const [address_city, setAddress_city] = useState([]);
    const [transport, setTransport] = useState([]);
    const [contact_facebook, setContact_facebook] = useState([]);
    const [contact_phone, setContact_phone] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${GET_EVENT_BY_ID}${id}`
            )
            setTitle(result.data.record.fields.title);
            setCover(result.data.record.fields.cover_url);
            setDecription(parse(result.data.record.fields.description));
            setDate(parse(result.data.record.fields.date_description));
            setPrice(result.data.record.fields.price_detail);
            setAddress_name(result.data.record.fields.address_name);
            setAddress_street(result.data.record.fields.address_street);
            setAddress_zipcode(result.data.record.fields.address_zipcode);
            setAddress_city(result.data.record.fields.address_city);
            setTransport(result.data.record.fields.transport);
            setContact_facebook(result.data.record.fields.contact_facebook);
            setContact_phone(result.data.record.fields.contact_phone)

        }
        fetchData();
    }, [id])

    return (
        <Fragment>
            <main id='event-details'>
                <div className="event-details__card main__card">
                    <div className="img-and-title__ctnr">
                        <img className='cover-xl' src={cover} alt="cover" />
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="event-details__card__ctnr">
                    <div className="event-details__card side-by-side__card">
                        <div className="block">
                            <h2>Infos :</h2>
                            <p className='date'>{date}</p>
                            {price ? <p className='price'>{price}</p> : <p className='price'>Gratuit</p>}
                        </div>
                        <div className="block">
                            <h2>Lieu :</h2>
                            <div className="miniblock">
                                <p className='address-name'>{address_name}</p>
                                <p className='infos'>{address_street}</p>
                                <p className='infos'>{address_zipcode}</p>
                                <p className='infos'>{address_city}</p>
                            </div>
                            {transport ?
                                <div className="miniblock">
                                    <p className='transport'>Transport :</p>
                                    <p className='infos'>{transport}</p>
                                </div>
                                :
                                <div></div>}
                        </div>

                        {
                            contact_facebook || contact_phone ?
                                <div className="block">
                                    <h2>Contact :</h2>
                                    {contact_facebook ?
                                        <div className="inline-infos">
                                            <img src={facebook} alt="facebook" />
                                            <a href={contact_facebook} className='infos' target='_blank' rel="noreferrer">{contact_facebook}</a>
                                        </div>
                                        :
                                        <div></div>
                                    }
                                    {contact_phone ?
                                        <div className="inline-infos">
                                            <img src={phone} alt="téléphone" />
                                            <p className='infos'>{contact_phone}</p>
                                        </div>
                                        :
                                        <div></div>
                                    }
                                </div>
                                :
                                <div></div>
                        }






                    </div>
                    <div className="event-details__card description__card side-by-side__card">
                        {description}
                    </div>
                </div>
            </main>

        </Fragment>
    )
}
