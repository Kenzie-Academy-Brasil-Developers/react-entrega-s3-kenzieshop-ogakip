import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px 20px 15px;
  box-shadow: 1px 1px 5px #4a4956;
  background-color: #4a4956;

  @media (max-width: 267px) {
      flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 463px) {
    flex-direction: column;
  }

  h1 {
    font-weight: 900;
    color: white;

    @media (max-width: 463px) {
      font-size: 18px;
    }
  }

  a {
    text-decoration: none;
  }
`;
