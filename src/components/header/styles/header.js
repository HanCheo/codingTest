import styled from "styled-components";

export const HeaderWrap = styled.section``;

export const NavWrap = styled.div`
  background: #f2f2f2;
`;

export const NavUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 13px;
  padding: 0 30px;
  justify-content: flex-end;
`;

export const NavLi = styled.li`
  & a {
    padding: 8px 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    color: #393939;
    text-decoration: none;
  }
`;

export const CartItems = styled.span`
  width: 13px;
  height: 13px;
  font-size: 11px;
  margin-right: 3px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #fc2433;
  padding-bottom: 1px;
`;

export const PageTitle = styled.div`
  padding: 8px 0 25px;
  text-align: center;
  border-bottom: 1px solid #d0d0d0;

  & img {
    width: 18vw;
    min-width: 130px;
    max-width: 180px;
  }
`;
