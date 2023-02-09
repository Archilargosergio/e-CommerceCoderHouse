import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemList.css';
import Item from '../Item/Item';
import { productsCollection } from '../../../firebaseConfig';
import { getDocs, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';

const ItemList = () => {
    const [secondProduct, setSecondProduct] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = async () => {

            let filter;

            if (categoryName) {
                filter = query(productsCollection, where("category", "==", categoryName))
            } else {
                filter = productsCollection;
            }

            const categoryOrder = getDocs(filter);
            categoryOrder
                .then((res) => {
                    const productItem = res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                    toast.info("I am a notification!");
                    setSecondProduct(productItem);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getProducts()

    }, [categoryName]);

    return (
        <div className='itemList'>
            {secondProduct.map(secondProduct => {
                return < Item secondProduct={secondProduct} key={secondProduct.id} />
            })}
        </div>
    )
}

export default ItemList;