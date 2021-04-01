import React from "react";
import { useRecoilValue } from "recoil";
import { getCartDatas } from "../store/recoil";


export default function Cart({ children, ...props }) {
  const carts = useRecoilValue(getCartDatas)

  console.log(carts.size)

  return <div>장바구니</div>;
}
