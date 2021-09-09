import { Fragment, React, useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');




export default function DisplayEventCards() {

    const [searchInputText, setSearchInputText] = useState();
    const [data, setData] = useState();
    let url = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=${searchInputText}&order_by=updated_at&limit=10`;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {

        const onSearchEvent = async () => {
            const result = await axios(
                url
            );
            setData(result.data.records);
        }
        onSearchEvent();

    }, [url, searchInputText])

    console.log(data);
    return (
        <Fragment>
            <input
                className='search-input'
                onChange={e => setSearchInputText(e.target.value)}
                value={searchInputText}
                type='text'
                placeholder="Tapez ici votre recherche d'événement"
            />
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
                                    lead_text: event.record.fields.lead_text,
                                    click: { openModal }
                                }}
                            ></EventCard>
                        </li>
                    )
                })}
            </ul>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel=""
            >
                <button onClick={closeModal}>X</button>
                <div>I am a modal</div>

            </Modal>
        </Fragment>
    )
}
