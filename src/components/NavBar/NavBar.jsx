import React, { useState } from 'react'
import './NavBar.css';
import Menu from './Menu';
import menu from '../../assets/icons/icon_menu.svg';
import logo from '../../assets/logos/local_convenience_store_FILL0_wght400_GRAD0_opsz48.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }
    return (
        <nav>
            <div className='menu-container z-10'>
                <img src={menu} alt="menu" className="menuLogo" onClick={handleToggleMenu} />
                {toggleMenu && < Menu />}
            </div>
            <div className="navbar-left">
                <Link to="/greeting">
                    <img src={logo} alt="logo" className="nav-logo" />
                </Link>
                < Menu />
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" >
                        24/7shop@gmail.com
                    </li>
                    <li className="navbar-shopping-cart " >
                        < CartWidget />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;