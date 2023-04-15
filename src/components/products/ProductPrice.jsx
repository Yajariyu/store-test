import { CartContext } from "@/context/cart/CartContext";
import React, { useContext, useState } from "react";

const ProductPrice = ({ product }) => {
  const { cart, updateCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (e) => {
    const productQuantity = e.target.value;
    if (isNaN(productQuantity) || productQuantity < 0) {
      setQuantity(0);
    } else {
      setQuantity(productQuantity);
    }
  };

  const addCart = () => {
    updateCart({
      id: product.id,
      quantity: Number(quantity),
      price: product.price,
    });
  };
  return (
    <div className="w-full flex flex-col justify-center mb-2">
      <div className="w-full flex justify-between mt-8 mb-4">
        <p className="font-bold">${product.price} </p>
        <input
          type="text"
          name="quantity"
          value={quantity}
          className="mx-2 px-2 border w-1/2"
          onChange={handleQuantity}
        />
      </div>
      <button
        class="rounded-full bg-purple-600 text-white font-bold py-2"
        onClick={addCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPrice;
