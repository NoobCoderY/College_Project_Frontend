import React, { Component } from "react";
import Slider from "react-slick";
import imgla from "../../../assets/Web 1280 – 2/Group 9969.svg";
import imgra from "../../../assets/Web 1280 – 2/Group 9970.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        background: "#0052CC",
        width: props?.width > 700 ? "3vw" : "7vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        bottom: props?.width > 700 ? "5.8vw" : "20vw",
        left: props?.width > 700 ? "5.5vw" : "88vw",
        height: props?.width > 700 ? "3vw" : "7vw",
        // boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <img
        src={imgra}
        style={{
          width: props?.width > 700 ? "3vw" : "7vw",
          height: props?.width > 700 ? "3vw" : "7vw",
          objectFit: "cover",
        }}
        alt=""
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        top: props?.width > 700 ? "30.2vw" : "22vw",
        left: props?.width > 700 ? "1.5vw" : "-3vw",
        width: props?.width > 700 ? "3vw" : "7vw",
        height: props?.width > 700 ? "3vw" : "7vw",

        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <img
        src={imgla}
        style={{
          width: props?.width > 700 ? "3vw" : "7vw",
          height: props?.width > 700 ? "3vw" : "7vw",
          objectFit: "cover",
        }}
        alt=""
      />
    </div>
  );
}
export default class BlogBannercarosel extends Component {
  render() {
    const settings = {
      dotsClass: "slick-dots1 slick-thumb",
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: <SampleNextArrow width={this?.props?.width} />,
      prevArrow: <SamplePrevArrow width={this?.props?.width} />,
    };
    const settings1 = {
      dotsClass: "slick-dots1 slick-thumb",
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow width={this?.props?.width} />,
      prevArrow: <SamplePrevArrow width={this?.props?.width} />,
    };
    return (
      <div>
        <Slider {...(this?.props?.width > 700 ? settings : settings1)}>
          <div className="catalogimages">
            <img src={this?.props?.img1} />
          </div>
          <div className="catalogimages">
            <img src={this?.props?.img2} />
          </div>
          <div className="catalogimages">
            <img src={this?.props?.img3} />
          </div>
          <div className="catalogimages">
            <img src={this?.props?.img4} />
          </div>
        </Slider>
      </div>
    );
  }
}
