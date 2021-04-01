import React from "react";
import { FeactureWrap, FeactureImgWrap, FeactureImgs, Dots } from "./styles/feacture";
import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import { getSlideImgs } from "../../store/recoil";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

export default function Feactures({ children, ...props }) {
  return <FeactureWrap {...props}>{children}</FeactureWrap>;
}

Feactures.Slider = function FeactureSlider({ children, ...props }) {
  const imgs = useRecoilValue(getSlideImgs);
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const setting = {
    customPaging: function (i) {
      return <Dots key={i} />;
    },
    dots: !isMobile,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <>
      <Slider {...setting} {...props}>
        {imgs.map((d, i) => {
          return (
            <FeactureImgWrap key={"slide_" + i}>
              {isMobile ? (
                <FeactureImgs src={"https://image.wingeat.com/" + d.mobileImage} alt={"slide_" + i} />
              ) : (
                <FeactureImgs src={"https://image.wingeat.com/" + d.image} alt={"slide_" + i} />
              )}
            </FeactureImgWrap>
          );
        })}
      </Slider>
    </>
  );
};
