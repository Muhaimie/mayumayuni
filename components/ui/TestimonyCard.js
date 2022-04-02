import React from "react";

const TestimonyCard = () => {
  return (
    <div className="rounded-lg drop-shadow-sm grayish max-w-xs min-w-full md:min-w-[50%] xl:min-w-min bg-white">
      <div className="mx-12 my-6">
        <h1 className="text-xl font-bold mb-4">Lorum Posum</h1>
        <p className="text-ellipsis overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          blandit libero volutpat sed.
        </p>
        <div className="mt-8 flex flex-row-reverse">
          <p>Muhaimie</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
