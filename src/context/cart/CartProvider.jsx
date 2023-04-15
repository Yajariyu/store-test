import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";
import { UPDATE_CART } from "./cartType";

const initialState = {
  cartProducts: [],
  amount: 0,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const updateCart = ({ id, quantity, price }) => {
    dispatch({
      type: UPDATE_CART,
      payload: { id, quantity, price },
    });
  };
  return (
    <CartContext.Provider value={{ cart: state, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
