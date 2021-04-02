import styled from "styled-components";

export const ListContainer = styled.section`
  max-width: 1200px;
  margin : 0 auto;
`;

export const Header = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 15px 0 25px;
`;

export const Wrap = styled.div`
  display: grid;
  padding: 0 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ItemWrap = styled.div`
  cursor: pointer;
  text-align: left;
`;

export const ItemImg = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const ItemName = styled.div`
  color: #525252;
  margin: 5px 0;
`;

export const ItemCost = styled.div`
  font-weight: 800;
  color: #121212;
`;
