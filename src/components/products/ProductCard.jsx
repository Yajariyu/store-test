import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { ProductTitle } from "./ProductTitle";

export const ProductCard = ({ product }) => {
  return (
    <div className=" flex flex-col border border-purple-600 w-full sm:w-[200px] min-h-[300px] px-2">
      <div className="relative min-h-[100px] h-2/4 px-auto mt-6">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <ProductTitle title={product.title} id={product.id} />
        <div>
          <p className="font-bold">${product.price} </p>
        </div>
        <div className=" min-h-[150px] max-h-[150px]">
          <p className="line-clamp-5">{product.description}</p>
        </div>
      </div>
      <button class="rounded-full bg-purple-600 text-white font-bold py-2">
        Add to Cart
      </button>
      <Link href="/" className="my-2 text-center underline">
        Learn more
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
