import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Header from "../components/Header";
import Main from './Main';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

// class Main extends Component {
const Root: React.FC = () => {

    return (
        <Container>
            <Header />
            <Main />
        </Container>
    );
}

export default Root;
