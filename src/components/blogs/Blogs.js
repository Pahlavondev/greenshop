import React from "react";
import "./Blogs.scss";
import BlogsCactus from "./blogscactus/BlogsCactus";

const Blogs = () => {
  return (
    <div className="blogs" id="blogs">
      <div className="container">
        <h2 className="blogs__title">Our Blog Posts</h2>
        <p className="blogs__text">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>

        <BlogsCactus />
      </div>
    </div>
  );
};

export default Blogs;
