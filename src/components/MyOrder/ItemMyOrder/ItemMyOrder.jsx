import { useContext } from 'react';
import './ItemMyOrder.css';
import CloseIcon from '../../../assets/icons/icon_close.png';
import { context } from '../../Context/CartContext';

const ItemMyOrder = ({ item }) => {
    const { removeCart } = useContext(context);

    const newRemoveCart = () => {
        removeCart(item);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={item.img} alt={item.id} />
            </figure>
            <p>{item.title}</p>
            <p>{item.quantity}</p>
            <p>${item.price}</p>
            <img className='closeIconImage' src={CloseIcon} alt="close" onClick={newRemoveCart} />
        </div>
    )
}

export default ItemMyOrder;