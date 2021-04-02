import styled from "styled-components";

export const ItemWrap = styled.div`
  margin: 10px;
  max-width : 767px;
  border: 1px solid #000;

  & > div {
    padding: 10px
  }
`;

export const ItemHeader = styled.div`
  display: flex;
`;

export const ItemCheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #aaa;
`;

export const ItemCheckbox = styled.input`
  position: absolute;
  top: -100%;

  &:checked + label {
    background: #a0fda08a;

    &::before {
      content: "✓";
      font-weight: 900;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const ItemName = styled.label`
  margin-left: 5px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: #000;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
  &::before {
    content: "✕";
  }
  &:focus{
    outline: none;
  }
`;

export const MidWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ItemImg = styled.img`
  width: 150px;
`;

export const ItemPriceWrap = styled.div`
  margin-left: 10px;
`;

export const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 900;
`;

export const ItemBtnWrap = styled.div`
  display: flex;
  background: #e2e2e2;
  margin-top: 10px;
  border-radius: 5px;
  & div {
    padding-left: 3px;
  }
  & div:nth-child(2) {
    padding-left: 0;
    cursor: initial;
  }
`;

export const ItemBtn = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const TotalPrice = styled.div``;
