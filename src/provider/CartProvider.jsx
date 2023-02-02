import CartContext from '../context/CartContext';

const CartProvider = ({ children }) => {
    const { Provider } = CartContext;
    return (
        <Provider>
            {children}
        </Provider>
    )
}

export default CartProvider;