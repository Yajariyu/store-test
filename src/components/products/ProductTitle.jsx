import React from "react";
import PropTypes from "prop-types";

export const ProductTitle = ({ title, id }) => {
  return (
    <div className="min-h-[50px] max-h-[50px] my-2">
      <h2 className="line-clamp-2 font-bold text-start">{title}</h2>
    </div>
  );
};

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
