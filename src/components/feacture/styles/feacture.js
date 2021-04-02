import styled from "styled-components";

export const FeactureWrap = styled.section`
  & ul.slick-dots {
    width: 100%;
    text-align: right;
    bottom: 5px;

    & .slick-active {
      & div {
        background-color: #000;
        border: 1px solid #fff;
      }
    }
  }
  @media (max-width: 767px) {
    & ul.slick-dots {
      bottom: 15px;
      & li {
        display: none;
        margin: 0 15px 15px 0;
        width: 50px;

        &.slick-active {
          display: inline-block;
          & div {
            background-color: rgba(0, 0, 0, 0.7);
            border: none;
            padding: 5px 0;
          }
        }
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

export const MobileDots = styled.div`
  text-align: center;
  letter-spacing: -2px;
  color: #fff;
  font-size: 20px;
  border-radius: 20px;
  border: none;
`;

export const FeactureImgWrap = styled.div`
  &:focus {
    outline: none;
  }
`;

export const FeactureImgs = styled.img`
  width: 100%;
`;
