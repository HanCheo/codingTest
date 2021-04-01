import React from "react";
import { useRecoilValue } from "recoil";
import { HeaderWrap, NavWrap, NavUl, NavLi, CartItems, PageTitle } from "./styles/header";
import { getCartDatas } from "../../store/recoil";
import { Link } from "react-router-dom";

export default function Header({ children, ...props }) {
  return <HeaderWrap {...props}>{children}</HeaderWrap>;
}

Header.NavWrap = function HeaderNavWrap({ children, ...props }) {
  return <NavWrap {...props}>{children}</NavWrap>;
};
Header.NavUl = function HeaderNavUl({ children, ...props }) {
  return <NavUl {...props}>{children}</NavUl>;
};
Header.CartItems = function HeaderCartItems({ children, ...props }) {
  const cartItems = useRecoilValue(getCartDatas);

  return <CartItems {...props}>{cartItems.size}</CartItems>;
};
Header.NavA = function HeaderNavA({ children, ...props }) {
  return (
    <Link to={props.link} {...props}>
      {children}
    </Link>
  );
};
Header.PageTitle = function HeaderPageTitle({ children, ...props }) {
  return <PageTitle {...props}>{children}</PageTitle>;
};
Header.NavLi = function HeaderNavLi({ children, ...props }) {
  return <NavLi {...props}>{children}</NavLi>;
};
