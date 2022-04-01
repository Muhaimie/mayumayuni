import React from "react";
import Image from "next/image";

const Cover = () => {
  return (
    <div className="relative bg-black h-2/6 md:h-3/6 xl:h-4/6 xl:mx-14 ">
      <div className="opacity-40 z-0">
        <Image
          src={"/cover.jpg"}
          alt="cover-image"
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className="text-white font-mono  relative h-full z-10">
        <div className="h-full items-center justify-center flex flex-col mx-4 ">
          <h className="text-2xl lg:text-4xl font-bold my-4">Mayu_Mayuni</h>
          <p className="text-lg lg:text-2xl lg:mx-10 text-ellipsis overflow-hidden text-center">
            Aesthetic Appreciation Touch and Ideas
          </p>
          <a className="mt-4 " href="#">
            <h1 className="font-medium text-md border-white hover:border-white hover:text-black hover:bg-white border-2 px-3 py-1 my-3">
              Shop Now
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cover;
