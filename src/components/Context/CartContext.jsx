import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

const initialState = {
    cart: [],
}
const CartContext = ({ children }) => {

    const [generalState, setGeneralState] = useState(initialState);

    const addProduct = (payload) => {
        return setGeneralState({
            ...generalState,
            cart: [generalState.cart, payload]
        })
    }

    const removeFromCart = (payload, indexValue) => {
        return setGeneralState({
            ...generalState,
            cart: generalState.cart.filter(
                (item, index) => item.id !== payload && index !== indexValue),
        });
    }

    const contextValue = {
        addProduct,
        removeFromCart,
        generalState
    }
    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext;

