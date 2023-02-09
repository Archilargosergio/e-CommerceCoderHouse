import './ItemDetail.css';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../../Context/CartContext';
import { productsCollection } from '../../../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import shoppingCart from '../../../assets/icons/icon_shopping_cart.svg';
import Spinner from '../../Spinner/Spinner';
import ItemCount from '../../ItemCount/ItemCount';

const ItemDetail = () => {
    const [product, setProduct] = useState({});
    const [confirm, setConfirm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [newCounter, setNewCounter] = useState(1);
    const { addCart } = useContext(context);

    const { id } = useParams();

    useEffect(() => {
        const getItemDetail = () => {

            const referenceDoc = doc(productsCollection, id)
            const order = getDoc(referenceDoc)

            order
                .then((result) => {
                    const newProduct = result.data()
                    setProduct(newProduct);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error)
                })
        };

        getItemDetail()

    });

    function handleAdd(counter) {
        setConfirm(true);
        setNewCounter(counter);
    }
    const newAddCart = () => {
        addCart(product, newCounter);
    }
    return <>
        {!loading ?
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
