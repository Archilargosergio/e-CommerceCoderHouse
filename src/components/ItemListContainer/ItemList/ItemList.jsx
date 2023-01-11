import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import './ItemList.css';
import Item from '../Item/Item';
import { products } from '../../../mock/Products';

const ItemList = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getProducts = async () => {

            return await new Promise((resolve, reject) => {
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
        <div>
            {item.map((product) => {
                return < Item product={product} key={product.id} />
            })}
        </div>
    )
}

export default ItemList;