import { UPDATE_CART } from "./cartType";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CART:
      let updateCart = [];
      updateCart = state.cartProducts.filter(
        (car) => car.id !== action.payload.id
      );
      updateCart.push({
        id: action.payload.id,
        quantity: action.payload.quantity,
        price: action.payload.price,
      });

      const updateAmount = updateCart.reduce(
        (acum, product) => acum + product.quantity * product.price,
        0
      );
      return {
        ...state,
        cartProducts: updateCart,
        amount: updateAmount,
      };
      break;

    default:
      return state;
  }
};
