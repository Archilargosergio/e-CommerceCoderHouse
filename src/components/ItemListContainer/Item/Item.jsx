import './Item.css';
import shoppingCart from '../../../assets/icons/icon_shopping_cart.svg';
import ItemCount from '../../ItemCount/ItemCount';

const Item = ({ item }) => {

    return (
        <article className="ProductItem">

            <a href={`/item/${item.id}`}>
                <img src={item.img} alt={item.id} />
            </a>

            <div className="productInfo">
                <div>
                    <p>${item.price}</p>
                    <p>{item.title}</p>
                </div>

                <div className='buttonContainer'>

                    < ItemCount />

                    <figure >
                        <img src={shoppingCart} alt="" />

                    </figure>

                </div>
            </div>
        </article>
    )
}

export default Item;