import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ProductsContext } from "@/context/products/ProductContext";

export const ProductTitle = ({ title, id }) => {
  const { changeTitle } = useContext(ProductsContext);
  const handleInput = (e) => {
    const titleChange = e.target.value;
    changeTitle({ title: titleChange, id });
  };
  return (
    <div className="h-[110px] my-2">
      <div className="h-[60px]">
        <h2 className="line-clamp-2 break-words text-ellipsis font-bold text-start">
          {title}
        </h2>
      </div>

      <div>
        <input
          type="text"
          name={title}
          value={title}
          onChange={handleInput}
          className="py-2 border"
        />
      </div>
    </div>
  );
};

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
