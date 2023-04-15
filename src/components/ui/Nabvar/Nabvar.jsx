import { CartContext } from "@/context/cart/CartContext";
import Image from "next/image";
import React, { useContext } from "react";

const Nabvar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="w-full bg-purple-200 h-[50px] px-10 py-auto flex items-center justify-end">
      <span className="font-bold text-purple-800 mx-2 text-[28px] leading-[30px]">
        ${cart.amount.toFixed(2)}
      </span>
      <Image
        src="./assets/cart.svg"
        alt="cart"
        width={30}
        height={30}
        priority
      />
    </nav>
  );
};

export default Nabvar;
