import styled from "styled-components";

export const FeactureWrap = styled.section`
  & ul.slick-dots {
    text-align: right;
    bottom: 5px;

    & .slick-active {
      & div {
        background-color: #000;
        border: 1px solid #fff;
      }
    }
  }
  & .slick-slider .slick-arrow.slick-next,
  & .slick-slider .slick-arrow.slick-prev {
    display: none !important;
  }
`;

export const Dots = styled.div`
  width: 10px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 1px solid #aaaaaa;
`;

export const FeactureImgWrap = styled.div`
  &:focus {
    outline: none;
  }
`;

export const FeactureImgs = styled.img`
  width: 100%;
`;
