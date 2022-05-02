import styled from "styled-components"

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const UlContainer = styled.ul`
width: 90%;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 20px;

li {
  min-width: 300px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #121e26;
  border-radius: 10px;
  background-color: #c9c9c9;
  padding: 10px;
    img {
        width: 260px;
        height: 250px;
    }
}
`

export const EmptyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
max-width: 600px;
color: white;
`