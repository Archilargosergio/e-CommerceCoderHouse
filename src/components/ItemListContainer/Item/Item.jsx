import { useState } from 'react';
import './Item.css';
import shoppingCart from '../../../assets/icons/icon_shopping_cart.svg';

const Item = ({ product }) => {
    const [counter, setCounter] = useState(1)
    return (
        <div className="ProductItem">
            <img src={product.img} alt={product.title} />
            <div className="productInfo">
                <div>
                    <p>{product.price}</p>
                    <p>{product.title}</p>
                </div>

                <div className='buttonContainer'>
                    <div className='counterItem-button'>
                        <button onClick={() => {
                            setCounter(counter - 1)
                        }}>
                            -
                        </button>
                        <span>{counter}</span>
                        <button onClick={() => {
                            setCounter(counter + 1)
                        }}>
                            +
                        </button>

                    </div>

                    <figure >
                        <img src={shoppingCart} alt="" />

                    </figure>

                </div>
            </div>
        </div>
    )
}

export default Item;