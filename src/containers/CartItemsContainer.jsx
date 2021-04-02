import React, { useEffect } from "react";
import { CartItem, BuyCart } from "../components";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkDatas, getCartDatas, totalPrice } from "../store/recoil";
import { addComma } from "../store/commonFunction";

export default function CartItemsContainer({ ...props }) {
  const [cartItems, setCartItems] = useRecoilState(getCartDatas);
  const [checkItems, setCheckItems] = useRecoilState(checkDatas);
  const tp = useRecoilValue(totalPrice);
  const cartItemsMap = [];

  const delItem = (v, e) => {
    e.preventDefault();
    setCheckItems(checkItems.filter((o) => o !== v.id));
    setTimeout(() => {
      setCartItems(v);
    }, 0);
  };

  const checkHandler = (checked, id) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      setCheckItems(checkItems.filter((o) => o !== id));
    }
  };

  const orderCart = () => {
    if (tp <= 0) {
      alert("잉...... 0원은 주문할수 없어요..");
    } else {
      alert("주문 완료 !! 10초 뒤에 도착합니다 !");
    }
  };

  useEffect(() => {
    if (cartItems.size === 0) {
      setTimeout(() => {
        if (window.confirm("장바구니 품목이 비었어요!\r\n상품을 고르러 갑시다 !")) window.location.href = "./";
      }, 0);
    }
  }, [cartItems]);

  cartItems.forEach((v) => {
    cartItemsMap.push(
      <CartItem key={"item_" + v.id}>
        <CartItem.ItemHeader>
          <CartItem.ItemCheckbox
            id={"check_" + v.id}
            type="checkbox"
            onChange={(e) => checkHandler(e.target.checked, v.id)}
            checked={checkItems.indexOf(v.id) >= 0 ? true : false}
          />
          <CartItem.ItemCheckboxLabel htmlFor={"check_" + v.id} />
          <CartItem.ItemName htmlFor={"check_" + v.id}>{v.itemName}</CartItem.ItemName>
          <CartItem.DeleteBtn onClick={(e) => delItem(v, e)} />
        </CartItem.ItemHeader>
        <CartItem.MidWrap>
          <CartItem.ItemImg src={"https://image.wingeat.com/" + v.image} />
          <CartItem.ItemPriceWrap>
            <CartItem.ItemPrice>{addComma(v.price)}원</CartItem.ItemPrice>
            <CartItem.ItemBtnWrap checked={checkItems.includes(v.id)} price={v.price} />
          </CartItem.ItemPriceWrap>
        </CartItem.MidWrap>
        <CartItem.TotalPrice></CartItem.TotalPrice>
      </CartItem>
    );
  });

  return (
    <BuyCart.TotalWrap>
      <div style={{ width: "100%" }}>{cartItems.size > 0 ? cartItemsMap : <CartItem>장바구니에 담긴 상품이 없습니다.</CartItem>}</div>
      <BuyCart>
        <BuyCart.TextWrap>
          <BuyCart.Text>결제 예정 금액</BuyCart.Text>
          <BuyCart.Price />
        </BuyCart.TextWrap>
        <BuyCart.BuyBtn onClick={orderCart}>주문하기</BuyCart.BuyBtn>
      </BuyCart>
    </BuyCart.TotalWrap>
  );
}
