import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const [menuBtnClassName, setMenuBtnClassName] = useState('menu-btn');
    const [navClassName, setNavClassName] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    // const [allClassNames, setAllClassNames] = useState('');

    const handleClassNames = () => {
        if (!menuOpen) {
            setMenuBtnClassName('menu-btn open')
            setNavClassName('open')
        } else {
            setMenuBtnClassName('menu-btn')
            setNavClassName('')
        }
    }

    useEffect(() => {
        if (!menuOpen) {
            setMenuOpen(true)
        } else {
            setMenuOpen(false)
        }
    }, [])

    let history = useHistory();
    return (
        <Fragment>
            <div className='navbar'>
                <div className="nav-content">
                    <h1>PARIS GO</h1>
                    <nav
                        className={navClassName}
                    >
                        <ul
                            onClick={() => setMenuBtnClassName(('menu-btn'))}
                        >
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
                        onClick={() => handleClassNames}
                    >
                        <div className="menu-btn__burger"></div>
                    </div>





                </div>
            </div>
        </Fragment>
    )
};

export default Navbar
