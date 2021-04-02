import React, { useEffect, useState } from "react";
import {
  ItemWrap,
  ItemHeader,
  ItemCheckboxLabel,
  ItemCheckbox,
  ItemName,
  DeleteBtn,
  MidWrap,
  ItemImg,
  ItemPriceWrap,
  ItemPrice,
  ItemBtnWrap,
  ItemBtn,
  TotalPrice,
} from "./styles/cartItem";
import { useSetRecoilState } from "recoil";
import { getTotalPrice } from "../../store/recoil";

export default function CartItem({ children, ...props }) {
  return (
    <ItemWrap {...props}>
      <div>{children}</div>
    </ItemWrap>
  );
}

CartItem.ItemHeader = function CartItemHeader({ children, ...props }) {
  return <ItemHeader {...props}>{children}</ItemHeader>;
};
CartItem.ItemCheckboxLabel = function CartItemCheckboxLabel({ children, ...props }) {
  return <ItemCheckboxLabel {...props}>{children}</ItemCheckboxLabel>;
};
CartItem.ItemCheckbox = function CartItemCheckbox({ children, ...props }) {
  return <ItemCheckbox {...props}>{children}</ItemCheckbox>;
};
CartItem.ItemName = function CartItemName({ children, ...props }) {
  return <ItemName {...props}>{children}</ItemName>;
};
CartItem.DeleteBtn = function CartDeleteBtn({ children, ...props }) {
  return <DeleteBtn {...props}>{children}</DeleteBtn>;
};
CartItem.MidWrap = function CartMidWrap({ children, ...props }) {
  return <MidWrap {...props}>{children}</MidWrap>;
};
CartItem.ItemImg = function CartItemImg({ children, ...props }) {
  return <ItemImg {...props}>{children}</ItemImg>;
};
CartItem.ItemPriceWrap = function CartItemPriceWrap({ children, ...props }) {
  return <ItemPriceWrap {...props}>{children}</ItemPriceWrap>;
};
CartItem.ItemPrice = function CartItemPrice({ children, ...props }) {
  return <ItemPrice {...props}>{children}</ItemPrice>;
};
CartItem.ItemBtnWrap = React.memo(function CartItemBtnWrap({ children, ...props }) {
  const [value, setValue] = useState(props.defaultQuantity || 1);
  const setTotalPrice = useSetRecoilState(getTotalPrice);
  const price = props.price;
  const checked = props.checked;

  console.log(price, checked);

  const addClick = () => {
    if (!checked) {
      alert("상품을 먼저 선택해주세요");
      return;
    }
    setValue(value + 1);
    setTotalPrice(price);
  };

  const diffClick = () => {
    if (!checked) {
      alert("상품을 먼저 선택해주세요");
      return;
    }
    if (value === 1) {
      return alert("1개 미만으로 구매하실 수 없습니다.");
    }
    setValue(value - 1);
    setTotalPrice(-price);
  };

  useEffect(() => {
    checked ? setTotalPrice(price * value) : setTotalPrice(-price * value);
    // eslint-disable-next-line
  }, [checked]);

  return (
    <ItemBtnWrap>
      <ItemBtn onClick={diffClick}>➖</ItemBtn>
      <ItemBtn>{value}</ItemBtn>
      <ItemBtn onClick={addClick}>➕</ItemBtn>
    </ItemBtnWrap>
  );
});
CartItem.ItemBtn = function CartItemBtn({ children, ...props }) {
  return <ItemBtn {...props}>{children}</ItemBtn>;
};
CartItem.TotalPrice = function CartTotalPrice({ children, ...props }) {
  return <TotalPrice {...props}>{children}</TotalPrice>;
};
