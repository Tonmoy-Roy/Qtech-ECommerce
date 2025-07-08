import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const useCart = () => useContext(CartContext);

export default useCart;