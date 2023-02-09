import './MyOrder.css';
import { context } from '../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/icons/flechita.svg';
import ItemMyOrder from './ItemMyOrder/ItemMyOrder';
import ButtonCartContainer from './ButtonCartContainer/ButtonCartContainer';

const MyOrder = ({ handleMyOrderToggle }) => {
    const { cartProduct } = useContext(context);

    return (
        <aside className="myOrderContainer">
            <div className="titleContainer">
                <img onClick={handleMyOrderToggle} src={Arrow} alt="arrow" />
                <p className="title"> < Link to='/cart'> My Order</Link></p>
            </div>
            <>
                {cartProduct.length ?
                    <div className="myOrderContent">
                        <div className='cartProductList'>

                            {cartProduct.map((item) => (
                                < ItemMyOrder item={item} key={item.id} />
                            ))}
                        </div>
                        < ButtonCartContainer />
                    </div> :
                    <p className='textAlertCartEmpty'> The Cart is empty</p>
                }
            </>
        </aside>
    )
}

export default MyOrder;