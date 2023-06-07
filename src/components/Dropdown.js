import "./Dropdown.css";
import styled from "styled-components";
const DropdownDiv = styled.div`
width: 30%;
`;
const H3Div = styled.h3`
color: white;
`;
const SelectDate = styled.input`
background-color: #DC3328;
`
const Dropdown =({handleDateChange, selectedDate}) => {

  return (
    <DropdownDiv className="dropdown">
      <H3Div>Select Date</H3Div>
       <SelectDate
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
  </DropdownDiv>
  );
}

export default Dropdown;