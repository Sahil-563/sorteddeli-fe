import React from "react";
import { productCard } from "../../../../public/dummydata/productCard";
import ProductCard from "../Cards/ProductCard";

const FeaturedProduct = () => {
  const featuredProductCard = productCard.slice(0, 4);

  return (
    <div className="py-10 w-full bg-[#f4f5f7]">
      <h2 className="uppercase text-[24px] font-bold text-black text-center mb-11">
        Feature Products
      </h2>

      <div className="flex justify-center gap-8">
        {featuredProductCard.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
