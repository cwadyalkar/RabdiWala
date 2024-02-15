import React, { useState, useEffect } from "react";
import rabdi1 from "../Assets/rabdi1.png";
import rabdi2 from "../Assets/rabdi2.png";
import rabdi3 from "../Assets/rabdi3.png";
import Heroimg from "../Assets/pngegg (4).png";
import products from "../Assets/fake-data/products";

import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Category from "../Components/Category";
import "./Home.css";
import WhyImg from "../Assets/images/location.png";
import ProductCard from "../Components/ProductCard";
import networkImg from "../Assets/images/network.png";
import TestimonialsSlider from "../Components/TestimonialsSlider";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: rabdi1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: rabdi2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: rabdi3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];
const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allproducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filterProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filterProducts);
    }
    if (category === "PIZZA") {
      const filterProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filterProducts);
    }
    if (category === "BREAD") {
      const filterProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filterProducts);
    }
  }, [category]);

  const [hotPizza, sethotPizza] = useState([]);

  useEffect(() => {
    const filterPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filterPizza.slice(0, 4);
    sethotPizza(slicePizza);
  }, []);
  return (
    <Container>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">
                  A Delightful Journey Into The World of Indian Desserts
                </h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY? </span>Just Come <br /> To The Shop{" "}
                  <span> RabdiWala</span>{" "}
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis obcaecati labore quisquam sed dolores accusamus
                  illum, accusantium deserunt doloremque omnis!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Check Out <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/menu">See All Foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No Shipping Charges
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-line"></i>
                    </span>
                    Available at Low Price
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={Heroimg} alt="" className="w-75 hero-img-container" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What We Serve</h5>
              <h2 className="feature__title">Just Come And Taste</h2>
              <h2 className="feature__title">
                Our Famous <span>Rabdi Dishes</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quas recusanda
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
                quasi!
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
            <Col lg="4" md="4"></Col>
            <Col lg="4" md="4"></Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Dishes</h2>
            </Col>
            <Col lg="12" className="popular__dishes-flex">
              <div className="food__category d-flex justify-content-center align-items-center">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center  ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={rabdi2} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center  ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={rabdi3} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center  ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={rabdi1} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allproducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={WhyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Rabdiwala?</span>
                </h2>
                <p className="tasty__treat-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta officiis quia nobis obcaecati consectetur modi nulla
                  commodi impedit quaerat ratione.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      {" "}
                      <i className="ri-checkbox-circle-line"></i>
                      Taste Of Rajasthan
                    </p>
                    <p className="choose__us-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore, autem?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      {" "}
                      <i className="ri-checkbox-circle-line"></i>
                      Quality Support
                    </p>
                    <p className="choose__us-description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Est, quis.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      {" "}
                      <i className="ri-checkbox-circle-line"></i>
                      Availaible On Zomato
                    </p>
                    <p className="choose__us-description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Est, quis.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>New Rabdis</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonials</h5>
                <h2 className="testimonial__title mb-4">
                  What Our <span>Customers</span> Are Saying
                </h2>
                <p className="testimonials__desc">
                  Lorem ipsum dolor sit ame t consectetur adipisicing elit.
                  Ratione asperiores error aut harum, sapiente neque modi
                  mollitia vel cum illo.
                </p>
                <TestimonialsSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Home;
