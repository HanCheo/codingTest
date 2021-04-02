import styled from "styled-components";

export const TotalWrap = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export const TextWrap = styled.div`
  width: 100%;
  margin: 10px auto;
  padding: 10px 0;
  display: flex;
  height: 80px;
  background: #f2f2f2;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  display: inline-block;
  font-size: 15px;
  padding-left: 15px;
`;

export const Price = styled.div`
  font-size: 23px;
  padding-right: 15px;
  font-weight: 900;
  margin: 0;
  color: #fb3843;
`;

export const BuyBtn = styled.button`
  font-size: 15px;
  width: 95%;
  margin: 20px auto 40px;
  color: #fff;
  background: #fc2433;
  cursor: pointer;
  border: none;
  height: 50px;
  border-radius: 7px;

  &:focus {
    outline: none;
  }
`;
