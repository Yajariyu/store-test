import React from "react";
import PropTypes from "prop-types";

export const ProductCard = ({ product }) => {
  console.log("porque no entro");
  return (
    <div className="bg-purple-400 border w-full sm:w-[200px] min-h-[150px]">
      {product.title}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
