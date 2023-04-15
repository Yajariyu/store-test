import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

export const ProductTitle = ({ title, id }) => {
  const [titleProduct, setTitleProduct] = useState(title);
  const [size, setSize] = useState("16");

  const handleInput = (e) => {
    const titleChange = e.target.value;
    setTitleProduct(titleChange);
  };

  const handleTitleSize = (e) => {
    const titleSizeValue = e.target.value;
    setSize(titleSizeValue);
  };

  return (
    <div className="h-[150px] my-2">
      <div className="h-[70px] overflow-hidden">
        <p
          className="line-clamp-2 break-words text-ellipsis  font-bold text-start"
          style={{ fontSize: Number(size) }}
        >
          {titleProduct}
        </p>
      </div>

      <div>
        <input
          type="text"
          name={title}
          value={titleProduct}
          onChange={handleInput}
          className={`py-2 border `}
        />
      </div>

      <div>
        <input
          type="range"
          name="range"
          min="12"
          max="40"
          className="w-full py-2"
          value={size}
          onChange={handleTitleSize}
        />
        <div className="flex justify-end text-[14px] pt-0 mx-0">
          Font Size: {size}px
        </div>
      </div>
    </div>
  );
};

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
