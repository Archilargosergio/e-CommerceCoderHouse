import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import shoppingCart from '../../../assets/icons/icon_shopping_cart.svg';
import { products } from '../../../mock/Products';

const ItemDetail = () => {
    const [counter, setCounter] = useState(1);
    const [product, setProduct] = useState({});

    const value = useParams();

    const number = parseFloat(value.id)

    useEffect(() => {
        const getItemDetail = async () => {
            return await new Promise((resolve, reject) => {
                const filterItems = products.find(
                    (prod) => prod.id === number);

                setTimeout(() => {
                    resolve(filterItems);

                }, 500);
            });
        }
        getItemDetail()
            .then((resolve) => {
                setProduct(resolve);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [number]);

    return (
        <main>
            <img className='imageContainer' src={product.img} alt={product.title} />

            <div className="ProductInfo">

                <div className='labelContainer'>

                    <div className='textContainer'>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
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
                <p>With its practical position, this product also fulfills a decorative function, add your hall or workspace.</p>
            </div>
        </main>
    )
}

export default ItemDetail;
