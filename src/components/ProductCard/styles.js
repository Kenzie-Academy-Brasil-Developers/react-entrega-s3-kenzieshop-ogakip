import styled from "styled-components";

export const Container = styled.li`
  margin: 10px;
  min-width: 300px;
  max-width: 300px;
  padding: 10px;
  border: 2px solid #121e26;
  border-radius: 10px;
  background-color: #c9c9c9;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  img {
    width: 290px;
    height: 250px;
  }
`;

export const DescriptionContainer = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 900;
    color: #242331;
  }

  p {
    font-weight: 700;
  }

  span {
    font-weight: 900;
    color: #ef5b5b;
  }

  div {
    width: 40%;
  }
`;
