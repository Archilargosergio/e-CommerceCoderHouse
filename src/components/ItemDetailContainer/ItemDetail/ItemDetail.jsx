import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import shoppingCart from '../../../assets/icons/icon_shopping_cart.svg';
import { products } from '../../../mock/Products';
import ItemCount from '../../ItemCount/ItemCount';
import { context } from '../../Context/CartContext';

const ItemDetail = () => {
    const [product, setProduct] = useState({});
    const { addProduct } = useContext(context);

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

                        < ItemCount itemStock={product.stock} />

                        <button className="primary-button add-to-cart-button" onClick={addProduct}>
                            <img src={shoppingCart} alt="add to cart" />
                            Add to cart
                        </button>
                    </div>

                </div>
                <p className='descriptionText'> This product also fulfills a decorative function, add your hall or workspace.</p>
            </div>
        </article>
    )
}

export default ItemDetail;
