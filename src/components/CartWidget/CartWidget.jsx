import shoppingCart from '../../assets/icons/icon_shopping_cart.svg';
import Circle from '../../assets/icons/circle_FILL1_wght400_GRAD0_opsz48.png';

const CartWidget = () => {
    return (
        <div className='flex relative text-white font-bold text-xs'>
            <img className='z-0 cursor-pointer hover:bg-lime-400' src={shoppingCart} alt="shopping-cart" />
            <img className='flex absolute -my-3 mx-3 z-10' src={Circle} alt="" />
            <span className='flex absolute -my-2 mx-5 z-20 p-auto'>1</span>
        </div>
    )
}

export default CartWidget;