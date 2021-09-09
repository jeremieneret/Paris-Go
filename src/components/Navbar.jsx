import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';


export default function Navbar() {
    let history = useHistory();
    return (
        <Fragment>
            <nav>
                <div className="nav-content">
                    <h1>PARIS GO</h1>
                    <ul>
                        <li>
                            <button onClick={() => { history.push('/') }}>Accueil</button>
                        </li>
                        <li>
                            <button onClick={() => { history.push('/SearchEvent') }}>Recherche</button>
                        </li>
                        <li>
                            <button onClick={() => { history.push('/Favorites') }}>Favoris</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
};
