import Image from "next/image";
import React from "react";

const PromoBanner = () => {
  const promoBannerUrl =
    "https://www.sorteddeli.com/wp-content/uploads/2022/03/pasta-new-parallex-web-banner.webp";
  return (
    <div className="w-full h-[330px]">
      <img src={promoBannerUrl} alt="" className="w-full h-[320px] cover" />
    </div>
  );
};

export default PromoBanner;
