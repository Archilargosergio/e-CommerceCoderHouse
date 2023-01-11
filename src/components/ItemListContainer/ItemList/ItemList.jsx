import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemList.css';
import Item from '../Item/Item';
import { products } from '../../../mock/Products';

const ItemList = () => {
    const [item, setItem] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = async () => {

            return await new Promise((resolve, reject) => {
                const filterProducts = products.filter((prod) => prod.category === categoryName);
                const listProducts = categoryName ? filterProducts : products;
                setTimeout(() => {
                    resolve(listProducts);
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
    }, [categoryName]);
    return (

        <div className='itemList'>
            {item.map((item) => {
                return < Item item={item} key={item.id} />
            })}
        </div>

    )
}

export default ItemList;