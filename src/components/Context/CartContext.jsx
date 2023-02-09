import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {

    const [cartProduct, setCartProduct] = useState([]);
    const [total, setTotal] = useState(0);
    const [amoung, setAmoung] = useState(0);

    const addCart = (product, newCounter) => {

        if (cartProduct.find(item => item.id === product.id)) {

            const newProduct = cartProduct.map(item =>
                item.id === product.id ?
                    { ...item, quantity: newCounter + item.quantity } :
                    { item, quantity: newCounter }
            );

            return (
                setCartProduct([...newProduct]),
                setTotal(total + product.price * newCounter),
                setAmoung(amoung + newCounter),
                toast.success('Successful product addition !', {
                    position: toast.POSITION.TOP_RIGHT
                })
            )
        }
        setCartProduct([...cartProduct, product]);
        setTotal(total + product.price * newCounter);
        setAmoung(newCounter);
        toast.success('Successful product addition !', {
            position: toast.POSITION.TOP_RIGHT
        });

    }

    const removeCart = (newCartProduct, counter) => {

        const removeProduct = cartProduct.filter(item =>
            item.id !== newCartProduct.id
        );
        return (
            setCartProduct(removeProduct),
            setTotal(total - newCartProduct.price * counter),
            setAmoung(amoung - newCartProduct.quantity),
            toast.info('Shopping cart was emptied !', {
                position: toast.POSITION.BOTTOM_CENTER
            })
        )
    }

    const emptyCart = () => {
        setCartProduct([]);
        setTotal(0);
        setAmoung(0);
    }

    const contextValue = {
        cartProduct,
        total,
        amoung,
        addCart,
        removeCart,
        emptyCart
    }
    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext;

