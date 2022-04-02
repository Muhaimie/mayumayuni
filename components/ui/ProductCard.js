import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="  rounded-sm">
      <a href="#">
        <div className="relative shadow border-transparent  w-60 h-80 scale-95 lg:hover:scale-100">
          <Image src="/product-demo.png" alt="bouquet" layout="fill" />
        </div>
        <div className="p-4 grayish text-center font-m ">
          <h1 className="font-semibold">Bouquet 1</h1>
          <p>$200.00</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
