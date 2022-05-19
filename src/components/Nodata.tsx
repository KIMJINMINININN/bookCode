import React from "react";
import styled from "styled-components";
import { ReactComponent as BookIcon } from '../asset/BookIcon.svg';

const Container = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 440px;
  top: 334px;
  p{
    position: relative;
    width: 175px;
    height: 24px;
    font-size: 16px;
    color: #6D7582;
    top: 24px;
    right: 43px;
  }
`;

const Nodata: React.FC = () => {
    return (
        <Container>
            <BookIcon />
            <p>검색된 결과가 없습니다.</p>
        </Container>
    );
};

export default Nodata;