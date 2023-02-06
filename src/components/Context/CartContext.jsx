import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

// const initialState = {
//     cart: [],
// }
const CartContext = ({ children }) => {

    // const [generalState, setGeneralState] = useState(initialState);

    // const addProduct = (payload) => {
    //     return setGeneralState({
    //         ...generalState,
    //         cart: [generalState.cart, payload]
    //     })
    // }

    // const removeFromCart = (payload, indexValue) => {
    //     return setGeneralState({
    //         ...generalState,
    //         cart: generalState.cart.filter(
    //             (item, index) => item.id !== payload && index !== indexValue),
    //     });
    // }

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [amoung, setAmoung] = useState(0)

    const addCart = (product, newCounter) => {
        setCart({
            ...cart,
            ...cart.push(product)
        })
        setTotal(product.price * newCounter);
        setAmoung(newCounter);

    }

    const contextValue = {
        cart,
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

