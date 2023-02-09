import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import shoppingCart from '../../../assets/icons/icon_shopping_cart.svg';
import Spinner from '../../Spinner/Spinner';
import { products } from '../../../mock/Products';
import ItemCount from '../../ItemCount/ItemCount';
import { context } from '../../Context/CartContext';

const ItemDetail = () => {
    const [product, setProduct] = useState({});
    const [confirm, setConfirm] = useState(false)
    const [newCounter, setNewCounter] = useState(1)
    const { addCart } = useContext(context);

    const value = useParams();

    const number = parseFloat(value.id)

    useEffect(() => {
        const getItemDetail = () => {

            return new Promise((resolve, reject) => {
                const filterItems = products.find(
                    (prod) => prod.id === number);

                setTimeout(() => {
                    resolve(filterItems);

                }, 2000);
            });
        }
        getItemDetail()
            .then((resolve) => {
                setProduct(resolve);
            })
            .catch((error) => {
                console.log(error);
            })
        window.addEventListener("reload", getItemDetail)

        return () => {
            window.removeEventListener("reload", getItemDetail)
        }
    }, [number]);

    function handleAdd(counter) {
        setConfirm(true);
        setNewCounter(counter);
    }
    const newAddCart = () => {
        addCart(product, newCounter);
    }
    return <>
        {product.id ?
            <article className='itemDetailContainer'>
                <div className='imageContainer'>
                    <img src={product.img} alt={product.title} />
                </div>

                <div className="ProductInfo">

                    <div className='labelContainer'>

                        <div className='textContainer'>
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                        </div>

                        <div className='buttonsContainer'>

                            < ItemCount handleAdd={handleAdd} />
                            {confirm ?
                                <button className="primary-button add-to-cart-button" onClick={newAddCart}>
                                    <img src={shoppingCart} alt="add to cart" />
                                    Add to cart
                                </button> : null
                            }
                        </div>

                    </div>
                    <p className='descriptionText'> This product also fulfills a decorative function, add your hall or workspace.</p>
                </div>
            </article> : < Spinner />
        }
    </>
}

export default ItemDetail;
