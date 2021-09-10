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
                            <button onClick={() => { history.push('/') }}>ACCUEIL</button>
                        </li>
                        <li>
                            <button onClick={() => { history.push('/DisplayEventCards') }}>RECHERCHE</button>
                        </li>
                        <li>
                            <button onClick={() => { history.push('/Favorites') }}>FAVORIS</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
};
