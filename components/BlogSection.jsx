import React from "react";
import BlogCart from "./BlogCart";

const BlogSection = () => {
  return (
    <div className="flex flex-col lg:px-40 px-4">
      <div className="flex justify-center my-4">
        <h1 className="capitalize text-5xl font-semibold">blogs</h1>
      </div>
      <ul className="flex flex-row flex-wrap justify-evenly space-y-8">
        <li className="first:mt-8">
          <BlogCart />
        </li>
        <li className="first:mt-8">
          <BlogCart />
        </li>
        <li className="first:mt-8">
          <BlogCart />
        </li>
        <li className="first:mt-8">
          <BlogCart />
        </li>
        <li className="first:mt-8">
          <BlogCart />
        </li>
      </ul>
    </div>
  );
};

export default BlogSection;
