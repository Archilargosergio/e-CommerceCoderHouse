import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {

    const [cartProduct, setCartProduct] = useState([]);
    const [total, setTotal] = useState(0);
    const [amoung, setAmoung] = useState(0)

    // const newCounterState = [...newCounter];

    const addCart = (product, newCounter) => {

        product.amoung = newCounter;

        setCartProduct(product)
        setTotal(product.price * newCounter);
        setAmoung(newCounter);

    }

    const contextValue = {
        cartProduct,
        total,
        amoung,
        addCart
    }
    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext;

