import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h4>All Categories</h4>
      <div className="bg-light p-4">
        {categories.map((category) => (
          <p className="my-4" key={category.id}>
            <Link
              to={`/categories/${category.id}`}
              className="text-decoration-none text-black "
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
