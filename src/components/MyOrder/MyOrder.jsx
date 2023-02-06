import './MyOrder.css';
import Arrow from '../../assets/icons/flechita.svg';
import ItemMyOrder from '../ItemMyOrder/ItemMyOrder';

const MyOrder = ({ handleMyOrderToggle }) => {

    return (
        <aside className="myOrderContainer">
            <div className="titleContainer">
                <img onClick={handleMyOrderToggle} src={Arrow} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="myOrderContent">
                <div className='cartProductList'>
                    < ItemMyOrder />
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