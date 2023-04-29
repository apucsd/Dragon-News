import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "../NewsCart";

const Categories = () => {
  const categoriesNews = useLoaderData();
  // console.log(categoriesNews);
  return (
    <div>
      {categoriesNews.map((singleCateNews) => (
        <NewsCart singleCateNews={singleCateNews}></NewsCart>
      ))}
    </div>
  );
};

export default Categories;
