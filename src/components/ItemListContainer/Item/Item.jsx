import { useState } from 'react';
import './Item.css';
import shoppingCart from '../../../assets/icons/icon_shopping_cart.svg';

const Item = ({ item }) => {
    const [counter, setCounter] = useState(1)
    return (
        <div className="ProductItem">

            <a href={`/item/${item.id}`}>
                <img src={item.img} alt={item.id} />
            </a>

            <div className="productInfo">
                <div>
                    <p>${item.price}</p>
                    <p>{item.title}</p>
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