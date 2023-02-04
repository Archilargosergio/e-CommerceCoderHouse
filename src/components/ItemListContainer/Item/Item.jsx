import { useContext } from 'react';
import './Item.css';
import shoppingCart from '../../../assets/icons/icon_shopping_cart.svg';
import ItemCount from '../../ItemCount/ItemCount';
import { context } from '../../Context/CartContext';

const Item = ({ item }) => {

    const { addProduct } = useContext(context);

    return (
        <main className="ProductItem">

            <a href={`/item/${item.id}`}>
                <img src={item.img} alt={item.id} />
            </a>

            <div className="productInfo">
                <div>
                    <p>${item.price}</p>
                    <p>{item.title}</p>
                </div>

                <div className='buttonContainer'>

                    < ItemCount itemStock={item.stock} />

                    <figure onClick={addProduct}>
                        <img src={shoppingCart} alt="" />

                    </figure>

                </div>
            </div>
        </main>
    )
}

export default Item;