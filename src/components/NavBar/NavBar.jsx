import { useState, useContext } from 'react'
import './NavBar.css';
import Menu from './Menu';
import menu from '../../assets/icons/icon_menu.svg';
import logo from '../../assets/logos/local_convenience_store_FILL0_wght400_GRAD0_opsz48.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { context } from '../Context/CartContext';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const { cartProduct } = useContext(context);

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
                    {cartProduct.length ?
                        <li className="navbar-shopping-cart " >
                            < CartWidget />
                        </li> :
                        null
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;