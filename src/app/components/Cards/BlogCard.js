import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ data }) => {
  return (
    <Link href={data.url}>
      <div className="py-8 w-[360px] text-black">
        <div className="max-h-[240px] w-full cover flex justify-center">
          <Image
            src={data.img}
            alt=""
            width={300}
            height={240}
            objectFit="cover"
          />
        </div>

        <div className="pt-2">
          <div className="text-[12px] text-[#1e1e1e] flex gap-3 font-extralight justify-center  ">
            <span>{data.publishingDate}</span>
            <span>In {data.category}</span>
          </div>
          <p className="text-[14px] font-bold pt-1 text-center">{data.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
