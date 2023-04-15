import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ProductCard } from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="w-full h-full mt-10 px-8 flex flex-wrap justify-center items-center gap-x-40 gap-y-8">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductGrid;
