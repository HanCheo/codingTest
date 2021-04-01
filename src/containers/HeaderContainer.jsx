import React from "react";
import { Header } from "../components";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.NavWrap>
        <Header.NavUl>
          <Header.NavLi>
            <Header.NavA link={"/cart"}>
              <Header.CartItems />
              장바구니
            </Header.NavA>
          </Header.NavLi>
        </Header.NavUl>
      </Header.NavWrap>
      <Header.PageTitle>
        <img src="https://image.wingeat.com/logo/images/we_logo_center.png" alt="logo" />
      </Header.PageTitle>
    </Header>
  );
}
