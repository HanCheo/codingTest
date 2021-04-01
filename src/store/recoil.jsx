import axios from "axios";
import { atom, selector } from "recoil";

export const getSlideImgs = selector({
  key: "getSlideImgs",
  get: async ({ get }) => {
    const response = await axios.get("https://node.wingeat.com/test-api/features");
    return response.data;
  },
});

export const ListDatas = atom({
  key: "Listdatas",
  default: [],
});

export const getListData = selector({
  key: "getListData",
  get: ({ get }) => {
    return get(ListDatas);
  },
  set: ({ get, set }, newValue = []) => {
    const currentItems = get(getListData);
    const appendedItems = [...currentItems, ...newValue];
    set(ListDatas, appendedItems);
  },
});

export const cartDatas = atom({
  key: "cartDatas",
  default: new Set(),
});

export const getCartDatas = selector({
  key: "getCartDatas",
  get: ({ get }) => {
    return get(cartDatas);
  },
  set: ({ get, set }, newValue = []) => {
    const currentCarts = get(getCartDatas);
    if (currentCarts.has(newValue)) {
      currentCarts.delete(newValue);
      set(cartDatas, new Set([...currentCarts]));
    } else {
      const appendedCart = new Set([...currentCarts, newValue]);
      set(cartDatas, appendedCart);
    }
  },
});
