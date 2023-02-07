import { useContext } from 'react';
import './ItemMyOrder.css';
import CloseIcon from '../../assets/icons/icon_close.png';
import { context } from '../Context/CartContext';

const ItemMyOrder = () => {
    const { cartProduct, total, amoung } = useContext(context);

    return (
        <div className="OrderItem">
            <figure>
                <img src={cartProduct.img} alt={cartProduct.id} />
            </figure>
            <p>{cartProduct.title}</p>
            <p>{amoung}</p>
            <p>${total}</p>
            <img className='closeIconImage' src={CloseIcon} alt="close" onClick={'removeFromCart'} />
        </div>
    )
}

export default ItemMyOrder;