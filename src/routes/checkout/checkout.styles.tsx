import styled from "styled-components";

export const CheckoutContainer = styled.main`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 992px) {
    width: 75%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

export const Total = styled.footer`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const Header = styled.header`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
