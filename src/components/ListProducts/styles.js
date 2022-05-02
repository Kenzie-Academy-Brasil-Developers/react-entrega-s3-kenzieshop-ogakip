import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 20px 0px 20px 0px;

  @media (min-width: 1024px) {
    background-color: #121e26;
  }
`;
export const UlContainer = styled.div`
  width: 100%;
`;

export const UlHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #4a4956;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  a {
    text-decoration: none;
  }

  h2 {
    color: white;
    font-weight: 900;
    text-transform: capitalize;
  }
`;

export const UlBody = styled.div`
  width: 100%;
  background-color: #4a4956b8;
`;

export const UlHalf = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  padding: 10px;
  @media (max-width: 400px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    ::-webkit-scrollbar {
      height: 10px;
      background-color: #4a4956;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #121e26;
    }
  }
`;

export const UlFull = styled.ul`
  @media (max-width: 767px) {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    overflow-x: scroll;
  }
  @media (min-width: 768px) {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
