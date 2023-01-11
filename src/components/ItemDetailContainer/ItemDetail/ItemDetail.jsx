import './ItemDetail.css';
import { useState, useEffect } from 'react';
import shoppingCart from '../../../assets/icons/icon_shopping_cart.svg';
import { products } from '../../../mock/Products';

const ItemDetail = () => {
    const [counter, setCounter] = useState(1);
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                }, 2000);
            })
        }
        getProducts()
            .then((resolve) => {
                setItem(resolve);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <main>
            <img className='imageContainer' src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />

            <div className="ProductInfo">

                <div className='labelContainer'>

                    <div className='textContainer'>
                        <p>Bike</p>
                        <p>$35,00</p>
                    </div>

                    <div className='buttonsContainer'>
                        <div className='counter-button'>
                            <button onClick={() => {
                                setCounter(counter - 1)
                            }}>
                                -
                            </button>
                            <p>{counter}</p>
                            <button onClick={() => {
                                setCounter(counter + 1)
                            }}>
                                +
                            </button>

                        </div>
                        <button className="primary-button add-to-cart-button">
                            <img src={shoppingCart} alt="add to cart" />
                            Add to cart
                        </button>
                    </div>

                </div>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            </div>
        </main>
    )
}

export default ItemDetail;
