import './ItemList.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsCollection } from '../../../firebaseConfig';
import { getDocs, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';
import Item from '../Item/Item';
import Spinner from '../../Spinner/Spinner';

const ItemList = () => {
    const [secondProduct, setSecondProduct] = useState([]);
    const [firstLoading, setFirstLoading] = useState(true);

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
                    setSecondProduct(productItem);
                    setFirstLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('Browser error !', {
                        position: toast.POSITION.TOP_CENTER
                    });
                })
        }
        getProducts()

    }, [categoryName]);

    return <>
        {!firstLoading ?
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