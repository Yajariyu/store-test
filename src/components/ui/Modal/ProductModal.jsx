import React from "react";

const ProductModal = ({ product, setOpenModal }) => {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity py-8">
        <div className="flex justify-center items-center">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 mx-8 w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-2 pt-2">
              <div
                className="flex justify-end font-bold text-red-500 text-[20px] cursor-pointer"
                onClick={() => setOpenModal(false)}
              >
                X
              </div>
              <div class="flex flex-col sm:items-start px-4 pb-4">
                <p className="font-bold py-4">{product.title}</p>
                <p className="text-justify">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
