import { ADD_PRODUCTS, CHANGE_TITLE } from "./productType";

export const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case CHANGE_TITLE:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, title: action.payload.title };
          } else {
            return product;
          }
        }),
      };
    default:
      return state;
  }
};
