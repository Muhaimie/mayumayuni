import React from "react";
import Image from "next/image";
import ProductCard from "../ui/ProductCard";

const Featured = () => {
  return (
    <div>
      <div className="mx-4 md:mx-12 lg:mx-40 py-4">
        <div className="flex items-center my-8">
          <h1 className="font-bold text-aero font-mono text-2xl flex-grow">
            Featured
          </h1>
          <a
            href="#"
            className=" font-semibold text-md text-aero hover:text-primary"
          >
            View all
          </a>
        </div>
        {/* card div */}
        <div className="flex xl:justify-center overflow-x-auto space-x-12">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Featured;
