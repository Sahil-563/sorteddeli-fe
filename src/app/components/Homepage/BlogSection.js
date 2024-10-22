import React from "react";
import BlogCard from "../Cards/BlogCard";
import { blogData } from "../../../../public/dummydata/blogData";
import Link from "next/link";

const BlogSection = () => {
  return (
    <div className="bg-[#fff] pt-10">
      <h2 className="uppercase text-[24px] font-bold text-black text-center">
        Blogs
      </h2>

      <div className="flex justify-center gap-7 flex-wrap">
        {blogData.map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>

      <div className="mt-5 flex justify-center mb-10">
        <Link href="/blog">
          <button className="py-[11px] px-[25px] bg-[#1e1e1e] text-white rounded">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
