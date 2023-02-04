import { useContext } from 'react';
import './MyOrder.css';
import Arrow from '../../assets/icons/flechita.svg';
import { context } from '../Context/CartContext';
import ItemMyOrder from '../ItemMyOrder/ItemMyOrder';

const MyOrder = ({ handleMyOrderToggle }) => {
    const { generalState } = useContext(context);

    return (
        <aside className="myOrderContainer">
            <div className="titleContainer">
                <img onClick={handleMyOrderToggle} src={Arrow} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="myOrderContent">
                <div className='cartProductList'>
                    {generalState.cart.map(productItem => {
                        return < ItemMyOrder productItem={productItem} key={productItem.id} />

                    })}
                </div>
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$ sumaTotal</p>
                </div>
                <button className="primaryButtonMyOrder">
                    Checkout
                </button>
            </div>
        </aside>
    )
}

export default MyOrder;