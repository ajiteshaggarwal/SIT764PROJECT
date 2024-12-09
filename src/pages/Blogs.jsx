import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import blogImage1 from "./../images/blogimage1.jpg";
import blogImage2 from "./../images/blogimage2.jpg";
import blogImage3 from "./../images/blogimage3.jpg";
import blogImage4 from "./../images/blogimage4.jpg";
import blogImage5 from "./../images/blogimage5.jpg";
import "./Blogs.css";

const BlogsPage = () => {
  const [blogStates, setBlogStates] = useState([
    { liked: false, saved: false },
    { liked: false, saved: false },
    { liked: false, saved: false },
    { liked: false, saved: false },
    { liked: false, saved: false },
  ]);

  const blogs = [
    {
      heading: "Heading 1",
      image: blogImage1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ligula quis justo feugiat cursus.",
    },
    {
      heading: "Heading 2",
      image: blogImage2,
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      heading: "Heading 3",
      image: blogImage3,
      content: "Ut quis sapien eget urna posuere facilisis. Integer sed sapien sed odio interdum luctus.",
    },
    {
      heading: "Heading 4",
      image: blogImage4,
      content: "Curabitur sit amet magna lacinia, vulputate ipsum vel, tincidunt eros. Donec a arcu in leo hendrerit fringilla.",
    },
    {
      heading: "Heading 5",
      image: blogImage5,
      content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
  ];

  const toggleLike = (index) => {
    const updatedStates = [...blogStates];
    updatedStates[index].liked = !updatedStates[index].liked;
    setBlogStates(updatedStates);
  };

  const toggleSave = (index) => {
    const updatedStates = [...blogStates];
    updatedStates[index].saved = !updatedStates[index].saved;
    setBlogStates(updatedStates);
  };

  return (
    <>
      <Navbar />
      <div className="blogs-container">
        <h1 className="blogs-heading">Blogs</h1>
        <div className="blogs-list">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <h2 className="blog-title">{blog.heading}</h2>
              <img src={blog.image} alt={blog.heading} className="blog-image" />
              <p className="blog-content">{blog.content}</p>
              <div className="blog-buttons">
                <button
                  className={`like-button ${blogStates[index].liked ? "active" : ""}`}
                  onClick={() => toggleLike(index)}
                >
                  {blogStates[index].liked ? "Liked ❤️" : "Like"}
                </button>
                <button
                  className={`save-button ${blogStates[index].saved ? "active" : ""}`}
                  onClick={() => toggleSave(index)}
                >
                  {blogStates[index].saved ? "Saved ✔️" : "Save"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
