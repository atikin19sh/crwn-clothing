import styled from "styled-components";
import Button from "../button/button.component";

export const SignUpFormContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }

  h2 {
    margin: 10px 0;
  }
`;

export const SignUpButton = styled(Button)`
  @media (max-width: 576px) {
    display: flex;
    width: 100%;
  }
`;
