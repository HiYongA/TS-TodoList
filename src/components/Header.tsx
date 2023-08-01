import { styled } from "styled-components";

const Header = () => {
  return <StyledHeader>TS 리덕스로 만든 투두리스트</StyledHeader>;
};

export default Header;

const StyledHeader = styled.div`
  background-color: powderblue;
  padding: 20px;
  text-align: center;
`;
