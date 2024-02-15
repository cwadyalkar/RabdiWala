import React from "react";
import { Link } from "react-router-dom";
// import rabdi1 from "../Assets/rabdi1.png";
// import rabdi2 from "../Assets/rabdi2.png";
// import rabdi3 from "../Assets/rabdi3.png";
// import products from "../Assets/fake-data/products";
import "./ProductCard.css"

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link>{title}</Link>
        </h5>
        <div className="popular__btn d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <Link to="/menu" className="addToCart__btn">Show More</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
