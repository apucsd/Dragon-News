import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

const NewsCart = ({ singleCateNews }) => {
  const { _id, title, details, author, image_url, rating } = singleCateNews;
  const { img, published_date, name } = author;
  const [showAll, setShowAll] = useState(false);
  return (
    <Card className="text-center">
      <Card.Header>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <div className="d-flex gap-2">
            <div className="d-flex   ">
              <img
                style={{ height: "40px", width: "40px" }}
                className="border rounded-circle m-auto"
                src={img}
                alt=""
              />
            </div>
            <div className="">
              <h6>{name}</h6>
              <p className="m-1">
                <small>{published_date}</small>
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 text-primary">
            <FaBookmark className=""></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <span>{details}</span>
          ) : (
            <span>
              {showAll ? details : details.slice(0, 250)}
              <Link
                to={`/news/${_id}`}
                onClick={() => setShowAll(!showAll)}
                className="d-block text-start m-3 text-danger"
              >
                {showAll ? "Read Less" : "Read More"}
              </Link>
            </span>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between ">
        <div>
          <Rating emptyIcon={null} readonly size={20} initialValue={rating} />
        </div>
        <div className="d-flex gap-2 align-items-center">
          <FaEye></FaEye>
          <p className="m-0 p-0">{rating.number}</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
