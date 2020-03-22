import styled from "styled-components";
import defualtImg from "../images/room-1.jpeg";
let blue = "#f15025";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defualtImg)}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
