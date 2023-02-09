import './Cart.css';
import { useContext } from 'react';
import { context } from '../Context/CartContext';
import ItemMyOrder from '../MyOrder/ItemMyOrder/ItemMyOrder';
import ButtonCartContainer from '../MyOrder/ButtonCartContainer/ButtonCartContainer';

const Cart = () => {

    const { cartProduct } = useContext(context);
    
  return <>
  {cartProduct.length ?
  <>
        <div className="containerCart">
    {cartProduct.map((item) => (
        
        < ItemMyOrder item={item} key={item.id}/>
        ))
        }

        < ButtonCartContainer />
                        </div>
                    
                        
                        </> :
                    <p className='containerAlertCartEmpty'> The Cart is empty</p>

                }
                        </>

            }
                    
export default Cart;