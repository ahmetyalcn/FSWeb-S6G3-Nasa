import Dropdown from "./Dropdown";
import styled from "styled-components";

const HeaderDiv = styled.div`
height: 12vh;
width: 100%;
border-bottom: 1px solid black;
display: flex;
background:black;
align-items: center;
justify-content: space-between;
`;
const ATag = styled.a`
text-decoration: none;
margin-right: 4%;
color: #aeaeae;
font-size: 1.5rem;
border-bottom: 1px solid #aeaeae;
`
const AList = styled.a`
width: 30%;
`
const Logo = styled.img`
height:50%;
`
const Header = ({handleDateChange, selectedDate}) => {
  return (
    <HeaderDiv>
        <Dropdown handleDateChange={handleDateChange} selectedDate={selectedDate}/>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1280px-NASA_Worm_logo.svg.png" alt="logo" />
        <AList>
          <ATag href="#">About</ATag>
          <ATag href="#">Blog</ATag>
          <ATag href="#">Contact Us</ATag>
        </AList>
    </HeaderDiv>
  )
}

export default Header