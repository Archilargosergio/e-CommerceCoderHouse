import './ButtonCartContainer.css';
import React from 'react';
import { useContext } from 'react';
import { context } from '../../Context/CartContext';
import { serverTimestamp, addDoc } from 'firebase/firestore';
import { salesCollection } from '../../../firebaseConfig';
import { toast } from 'react-toastify';

const ButtonCartContainer = () => {

    const { emptyCart, total, cartProduct } = useContext(context);

    const handlePurchase = () => {

        const purchase = {
            user: {
                name: 'Sergio',
                email: 'archilargosergio@gmail.com',
                tel: '3454876478'
            },
            cartProduct,
            total,
            date: serverTimestamp(),
        }

        const newOrder = addDoc(salesCollection, purchase);
        newOrder
            .then((result) => {
                console.log(result.id);
                console.log(result);
                toast.success('Success purchase !', {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .catch((error) => {
                console.log(error);
                toast.error('Failed purchase !', {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }

    return <>
        {!handlePurchase ?
            <div>

                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$ {total}</p>
                </div>

                <div className='containerButtons'>
                    <button className="primaryButtonMyOrder" onClick={handlePurchase}>
                        Checkout
                    </button>
                    <button className="secondaryButtonEmptyCart" onClick={emptyCart}>
                        Empty cart
                    </button>
                </div>

            </div> :
            <p className='purchaseIdContainer'>Your order id is {salesCollection.id}</p>

        }
    </>
}

export default ButtonCartContainer;