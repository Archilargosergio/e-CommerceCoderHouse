import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemList.css';
import Item from '../Item/Item';
import Spinner from '../../Spinner/Spinner';
import { products } from '../../../mock/Products';

const ItemList = () => {
    const [secondProduct, setSecondProduct] = useState([]);

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
                setSecondProduct(resolve);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categoryName]);

    return <>
        {secondProduct === products || categoryName ?
            <div className='itemList'>
                {secondProduct.map(secondProduct => {
                    return < Item secondProduct={secondProduct} key={secondProduct.id} />
                })}
            </div> :
            < Spinner />

        }
    </>
}

export default ItemList;