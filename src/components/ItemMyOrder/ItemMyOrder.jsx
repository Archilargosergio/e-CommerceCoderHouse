import { useContext } from 'react';
import './ItemMyOrder.css';
import CloseIcon from '../../assets/icons/icon_close.png';
import { context } from '../Context/CartContext';

const ItemMyOrder = ({ productItem }) => {
    const { removeFromCart } = useContext(context);

    return (
        <div className="OrderItem">
            <figure>
                <img src={productItem.img} alt={productItem.id} />
            </figure>
            <p>{productItem.title}</p>
            <p>${productItem.price}</p>
            <img className='closeIconImage' src={CloseIcon} alt="close" onClick={removeFromCart} />
        </div>
    )
}

export default ItemMyOrder