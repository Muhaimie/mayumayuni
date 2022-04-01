import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="border-2 border-gray hover:border-primary hover:bg-primary rounded-sm">
      <a href="#">
        <div className="relative  w-60 h-80">
          <Image src="/test2.jpg" alt="bouquet" layout="fill" />
        </div>
        <div className="p-4 grayish  w-60 text-center ">
          <h1 className="font-semibold">Bouquet 1</h1>
          <p>$200.00</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
