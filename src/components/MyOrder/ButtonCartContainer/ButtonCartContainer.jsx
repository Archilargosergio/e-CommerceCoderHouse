import './ButtonCartContainer.css';
import React from 'react';
import { useContext } from 'react';
import { context } from '../../Context/CartContext';

const ButtonCartContainer = () => {

    const { emptyCart, total } = useContext(context);

    return (
        <div>

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

        </div>
    )
}

export default ButtonCartContainer;