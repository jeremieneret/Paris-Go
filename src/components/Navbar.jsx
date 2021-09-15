import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    //we use useState to handle the state of the SCSS classes which will display everything needed for the burger-menu of the mobile version
    const [menuBtnClassName, setMenuBtnClassName] = useState('menu-btn');
    const [navClassName, setNavClassName] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    //then we will pass this function to the menu button and also to the <nav>, to make it sure it will close after the user change of page.
    const openMenu = () => {
        if (!menuOpen) {
            setMenuOpen(true)
            setMenuBtnClassName('menu-btn open')
            setNavClassName('open')
        } else {
            setMenuOpen(false)
            setMenuBtnClassName('menu-btn')
            setNavClassName('')
        }
    }

    //useHistory allows the user to navigate between the "pages" of the application. here we just declare it in a variable to be called down there
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
                            onClick={openMenu}
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
