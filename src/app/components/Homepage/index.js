"use client";
import React from "react";
import BannerSlider from "./BannerSlider";
import ProductSection from "./ProductSection";
import PromoBanner from "./PromoBanner";
import DetailsSection from "./DetailsSection";
import FeaturedProduct from "./FeaturedProduct";
import OurBestSellers from "./OurBestSellers";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";
import Newsletter from "./Newsletter";
import ScrollToTopButton from "../CustomButtons/ScrolltoTop";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <BannerSlider />
      <ProductSection />
      <PromoBanner />
      <DetailsSection />
      <FeaturedProduct />
      <OurBestSellers />
      <Testimonials />
      <BlogSection />
      <Newsletter />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
