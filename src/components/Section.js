import React from "react";
import styled from "styled-components";

function Section({title,description,backgroundImage,leftButtonText,rightButtonText}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
      <ButtonGroup>
        <LeftButton>{leftButtonText}</LeftButton>
        <RightButton>{rightButtonText}</RightButton>
      </ButtonGroup>
      <DownArrow src="images/down-arrow.svg"/>
      </Buttons>
    </Wrap>
  );
}
export default Section;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const DownArrow = styled.img`
margin-top:20px;
height:40px;
animation: animateDown infinite 1.5s;
overflow-x:hidden;
`

const Buttons =styled.div``

const ButtonGroup = styled.div`
  margin-bottom: 30px;
  display: flex;
  @media (max-width:768px){
    flex-direction:column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin:8px;
`

const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;`


