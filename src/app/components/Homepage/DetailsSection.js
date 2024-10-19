import React from "react";

const DetailsSection = () => {
  return (
    <div className="py-10 text-[black] text-center flex flex-col justify-center bg-[#fff]">
      <h2 className="text-[26px] px-5 pb-9 font-bold uppercase">
        What’s the deal with these food products?
      </h2>
      <div className="w-full flex justify-center">
        <p className="text-[16px] w-[60%] text-center">
          They’re unlike any other that you’ll find in grocery stores! Our
          products are made with real, simple, and exceptional ingredients that
          are free of grains, gluten, refined sugar, and soy.
          <br />
          We believe in giving you the best of what’s natural. No processed or
          artificial ingredients, no added sugars, and partially hydrogenated
          fats – just real food that tastes great!
        </p>
      </div>
    </div>
  );
};

export default DetailsSection;
