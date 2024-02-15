import React from "react";
import Slider from "react-slick";
import Ava01 from "../Assets/images/ava-1.jpg";
import Ava02 from "../Assets/images/ava-2.jpg";
import Ava03 from "../Assets/images/ava-3.jpg";
import Ava04 from "../Assets/images/ava-4.jpg";
import "./TestimonialsSlider.css"
const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div >
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus facere velit illo totam deleniti assumenda aut maxime
          magnam asperiores est.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={Ava01} alt="avatar" className=" rounded" />
          <h6>Devesh Umredkar</h6>
        </div>
      </div>
      <div >
      <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus facere velit illo totam deleniti assumenda aut maxime
          magnam asperiores est.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={Ava02} alt="avatar" className=" rounded"/>
          <h6>Ishika Thakre</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus facere velit illo totam deleniti assumenda aut maxime
          magnam asperiores est.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={Ava03} alt="avatar" className=" rounded"/>
          <h6>Sakshi Rahangdale</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus facere velit illo totam deleniti assumenda aut maxime
          magnam asperiores est.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3">
          <img src={Ava04} alt="avatar" className=" rounded" />
          <h6>Chirag Wadyalkar</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialsSlider;
