
const NavBar = () => {
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" onClick={handleToggleMenu} />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li><a href="/">ALL</a></li>
                    <li><a href="/">Clothles</a></li>
                    <li><a href="/">Electronics</a></li>
                    <li><a href="/">Furniture</a></li>
                    <li><a href="/">Toys</a></li>
                    <li><a href="/">Others</a></li>
                </ul>
                <div className='new-menu'>
                    <ul className={'menu-left' + (toggleMenu ? '--active' : '')}>
                        <li><a href="/">ALL</a></li>
                        <li><a href="/">Clothles</a></li>
                        <li><a href="/">Electronics</a></li>
                        <li><a href="/">Furniture</a></li>
                        <li><a href="/">Toys</a></li>
                        <li><a href="/">Others</a></li>

                        <div className={toggleMenu ? 'settings-user' : ''}>
                            <div className='line'></div>
                            <a href="/">My orders</a>
                            <a href="/">My account</a>
                            <div className='user'>
                                <a className='user-email'>platzi@example.com</a>
                                <a className='singOut'>Sign out</a>
                            </div>
                        </div>
                    </ul>
                </div>

            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={handleToggleOrders} ><img src={shoppingCart} alt="shopping-cart" />
                        {state.cart.length > 0 ? <div> {state.cart.length} </div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
        </nav>
    )
}

export default NavBar