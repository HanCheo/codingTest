import React from "react";
import CartItemsContainer from "../containers/CartItemsContainer";

export default function Cart({ children, ...props }) {
  return (
    <>
      <CartItemsContainer />
    </>
  );
}
