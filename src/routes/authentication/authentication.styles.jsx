import styled from "styled-components";

export const AuthenticationContainer = styled.main`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: 576px) {
  }
`;
