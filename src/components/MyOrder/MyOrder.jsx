import './MyOrder.css';
import Arrow from '../../assets/icons/flechita.svg';
import ItemMyOrder from '../ItemMyOrder/ItemMyOrder';
import { context } from '../Context/CartContext';
import { useContext } from 'react';

const MyOrder = ({ handleMyOrderToggle }) => {
    const { cartProduct, total, emptyCart } = useContext(context);

    return (
        <aside className="myOrderContainer">
            <div className="titleContainer">
                <img onClick={handleMyOrderToggle} src={Arrow} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <>
                {cartProduct.length ?
                    <div className="myOrderContent">
                        <div className='cartProductList'>

                            {cartProduct.map((item) => (
                                < ItemMyOrder item={item} key={item.id} />
                            ))}
                        </div>
                        <div className="order">
                            <p>
                                <span>Total</span>
                            </p>
                            <p>$ {total}</p>
                        </div>
                        <div className='containerButtons'>
                            <button className="primaryButtonMyOrder">
                                Checkout
                            </button>
                            <button className="secondaryButtonEmptyCart" onClick={emptyCart}>
                                Empty cart
                            </button>
                        </div>
                    </div> :
                    <p className='textAlertCartEmpty'> The Cart is empty</p>
                }
            </>
        </aside>
    )
}

export default MyOrder;