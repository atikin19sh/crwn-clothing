import styled from "styled-components";

export const DirectoryContainer = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
