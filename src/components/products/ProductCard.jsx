import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { ProductTitle } from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductModal from "../ui/Modal/ProductModal";

export const ProductCard = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full md:w-[300px] lg:w-[250px] min-h-[300px] px-4 border rounded-lg border-purple-600 ">
        <div className="relative min-h-[100px] h-2/4 px-auto mt-6">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width:80%)"
          />
        </div>
        <div>
          <ProductTitle title={product.title} id={product.id} />
          <ProductPrice product={product} />
          <div className="min-h-[150px] max-h-[150px]">
            <p className="line-clamp-5">{product.description}</p>
          </div>
        </div>
        <span
          onClick={() => setOpenModal(true)}
          className="mb-4 text-center underline cursor-pointer"
        >
          Learn more
        </span>
        {openModal && (
          <ProductModal product={product} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
