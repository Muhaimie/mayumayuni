import React from "react";
import TestimonyCard from "../ui/TestimonyCard";

const Testimonies = () => {
  return (
    <div className="font-mono mt-4 bg-blue-50 ">
      <div className="pt-8 pb-16 mx-4 md:mx-12 lg:mx-40 py-4">
        <h1 className="font-bold my-8 mb-8 text-aero font-mono text-2xl">
          Testimonies
        </h1>
        <div className="flex mt-12 lg:justify-center overflow-x-auto space-x-12 ">
          <TestimonyCard />
          <TestimonyCard />
          <TestimonyCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
