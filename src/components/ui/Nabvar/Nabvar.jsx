import Image from "next/image";
import React from "react";

const Nabvar = () => {
  return (
    <nav className="w-full bg-purple-200 h-[50px] px-10 flex items-center justify-end ">
      Nabvar
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
