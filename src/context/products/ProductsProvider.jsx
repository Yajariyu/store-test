import { useReducer, useCallback } from "react";
import { ADD_PRODUCTS, CHANGE_TITLE } from "./productType";

import { ProductsContext } from "./ProductContext";
import { productReducer } from "./productReducer";

const initialState = {
  products: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addProducts = (products) => {
    dispatch({
      type: ADD_PRODUCTS,
      payload: products,
    });
  };

  const changeTitle = ({ title, id }) => {
    dispatch({
      type: CHANGE_TITLE,
      payload: { title, id },
    });
  };
  return (
    <ProductsContext.Provider
      value={{ products: state.products, addProducts, dispatch, changeTitle }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
