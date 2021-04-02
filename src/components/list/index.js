import React, { useEffect, useRef } from "react";
import { ListContainer, Header, Wrap, ItemWrap, ItemImg, ItemName, ItemCost } from "./styles/list";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getListData, getCartDatas } from "../../store/recoil";
import { addComma } from "../../store/commonFunction";
import axios from "axios";

export default function List({ children, ...props }) {
  return <ListContainer {...props}>{children}</ListContainer>;
}

List.Header = function ListHeader({ children, ...props }) {
  return <Header {...props}>{children}</Header>;
};
List.Wrap = function ListWrap({ children, ...props }) {
  const [listDatas, setListDatas] = useRecoilState(getListData);

  const setCartItems = useSetRecoilState(getCartDatas);
  const page = useRef(0);

  const fetchMoreData = async () => {
    console.log(page.current + 1, "start");
    page.current++;
    const response = await axios.get("https://node.wingeat.com/test-api/items?page=" + page.current);
    setListDatas(response.data);
  };

  const handleScroll = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && page.current < 6) {
      await fetchMoreData();
      handleScroll();
    }
  };
  function addCart(i, e) {
    e.preventDefault();
    setCartItems(listDatas[i]);
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Wrap>
      {listDatas.map((d, i) => {
        return (
          <ItemWrap key={i} onClick={(e) => addCart(i, e)}>
            <ItemImg src={"https://image.wingeat.com/" + d.image} />
            <ItemName>{d.itemName}</ItemName>
            <ItemCost>{addComma(d.price)}원</ItemCost>
          </ItemWrap>
        );
      })}
    </Wrap>
  );
};
