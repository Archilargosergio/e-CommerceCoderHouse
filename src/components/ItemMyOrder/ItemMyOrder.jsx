import './ItemMyOrder.css';
import CloseIcon from '../../assets/icons/icon_close.png';

const ItemMyOrder = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img src='' alt='' />
            </figure>
            <p>Title</p>
            <p>$</p>
            <img className='closeIconImage' src={CloseIcon} alt="close" onClick='' />
        </div>
    )
}

export default ItemMyOrder