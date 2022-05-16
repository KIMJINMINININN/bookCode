import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #EAF3FE;
  h1{
    position: absolute;
    width: 142px;
    height: 32px;
    left: 440px;
    top: 24px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: #1A1E27;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <h1>30COS Books</h1>
    </Container>
  );
};

export default Header;
