import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ProductCard } from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center gap-8">
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
