import styled from "styled-components";

export const SignInFormContainer = styled.article`
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
  }
`;
