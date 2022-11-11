import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  padding-left: 20px;
  cursor: pointer;
  outline: 3px solid transparent;
  background-color: #ffffff;
  transition: background-color 300ms ease-in, outline 300ms ease;

  &:hover {
    outline: 3px solid gray;
    background-color: #f3f3f3;
    transition: background-color 500ms ease-in, outline 300ms ease;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
