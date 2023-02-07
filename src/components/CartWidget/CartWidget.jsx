import { useState, useContext } from 'react';
import shoppingCart from '../../assets/icons/icon_shopping_cart.svg';
import Circle from '../../assets/icons/circle_FILL1_wght400_GRAD0_opsz48.png';
import MyOrder from '../MyOrder/MyOrder';
import { context } from '../Context/CartContext';

const CartWidget = () => {
    const [myOrderToggle, setMyOrderToggle] = useState(false);

    const { amoung } = useContext(context);

    const handleMyOrderToggle = () => {
        return setMyOrderToggle(!myOrderToggle)
    }
    return (
        <div className='relative'>
            <nav className='text-white font-bold text-xs hover:scale-10 hover:duration-150' onClick={handleMyOrderToggle}>
                <img className='absolute z-0 cursor-pointer hover:bg-lime-400' src={shoppingCart} alt="shopping-cart" />
                <img className='absolute w-6 mx-3 z-10' src={Circle} alt="" />
                <span className='absolute mx-5 z-20 p-auto'>{amoung}</span>
            </nav>
            {myOrderToggle && < MyOrder handleMyOrderToggle={handleMyOrderToggle} />}
        </div>
    )
}

export default CartWidget;