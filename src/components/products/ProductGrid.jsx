import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ProductCard } from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="mt-10 grid justitfy-center items-end first-line: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ">
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
