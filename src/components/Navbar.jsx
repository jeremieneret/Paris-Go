import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';




const Navbar = () => {

    const [menuBtnClassName, setMenuBtnClassName] = useState('menu-btn');
    const [navClassName, setNavClassName] = useState('');
    let menuOpen = false;


    const openMenu = () => {

        if (!menuOpen) {
            setMenuBtnClassName('menu-btn open');
            menuOpen = true;
            setNavClassName('open')
        } else {
            setMenuBtnClassName('menu-btn');
            menuOpen = false;
            setNavClassName('')
        }
    };
    let history = useHistory();
    return (
        <Fragment>
            <div className='navbar'>
                <div className="nav-content">
                    <h1>PARIS GO</h1>
                    <nav
                        className={navClassName}
                    >
                        <ul>
                            <li>
                                <button onClick={() => { history.push('/') }}>ACTU</button>
                            </li>
                            <li>
                                <button onClick={() => { history.push('/SearchEvent') }}>RECHERCHE</button>
                            </li>
                            <li>
                                <button onClick={() => { history.push('/Favorites') }}>FAVORIS</button>
                            </li>
                        </ul>
                    </nav>
                    <div
                        className={menuBtnClassName}
                        onClick={openMenu}
                    >
                        <div className="menu-btn__burger"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Navbar
