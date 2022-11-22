import styled from "styled-components";

export const CheckoutItemContainer = styled.section`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Name = styled(BaseSpan)`
  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const Arrow = styled.button`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Price = styled(BaseSpan)`
  @media (max-width: 576px) {
    flex: 0 1 33%;
  }
`;

export const RemoveButton = styled.button`
  padding-left: 12px;
  cursor: pointer;
`;
