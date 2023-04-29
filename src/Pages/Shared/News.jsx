import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const singleNews = useLoaderData();
  const { title, image_url, details } = singleNews;

  return (
    <div className="border p-3 rounded">
      <img className="img-fluid" src={image_url} alt="" />
      <br />
      <br />
      <h3 className="my-3">{title}</h3>
      <hr />
      <br />
      <p className="text-secondary">{details}</p>
      <Link to="/categories/0">
        <button className="btn btn-danger">All news in this category</button>
      </Link>
    </div>
  );
};

export default News;
