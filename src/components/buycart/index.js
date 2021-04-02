import React from "react";
import { TotalWrap, Container, TextWrap, Text, Price, BuyBtn } from "./styles/buycart";
import { useRecoilValue } from "recoil";
import { getTotalPrice } from "../../store/recoil";
import { addComma } from "../../store/commonFunction";

export default function BuyCart({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

BuyCart.TotalWrap = function BuyCartTotalWrap({ children, ...props }) {
  return <TotalWrap {...props}>{children}</TotalWrap>;
};
BuyCart.TextWrap = function BuyCartTextWrap({ children, ...props }) {
  return <TextWrap {...props}>{children}</TextWrap>;
};
BuyCart.Text = function BuyCartText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};
BuyCart.Price = function BuyCartPrice({ ...props }) {
  const totalPrice = useRecoilValue(getTotalPrice);
  return <Price {...props}>{addComma(totalPrice)}원</Price>;
};
BuyCart.BuyBtn = function BuyCartBuyBtn({ children, ...props }) {
  return <BuyBtn {...props}>{children}</BuyBtn>;
};
