import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Textarea from 'components/common/Textarea';
import { ReactComponent as Search } from '../asset/Search.svg';
import Nodata from 'components/Nodata';
import BookList from 'components/BookList';

const Container = styled.div`
  position: relative;
  width: 960px;
  height: 900px;
  // height: 1000px;
  left: 480px;
  top: 80px;
  .Main-Header-Text{
    position: relative;
    width: 96px;
    height: 32px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;

    color: #1A1E27;
  }
  .Main-Header{
    position: relative;
    width: 600px;
    display: flex;
    height: 50px;
    top: 16px;
    .Main-Header-Search{
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 0px 10px 10px;
      gap: 11px;
      
      width: 480px;
      height: 50px;
      

      background: #F2F4F6;
      border-radius: 100px;
    }

    .Main-Header-Button{
      position: relative;
      width: 80px;
      height: 32px;
      top: 7px;
      left: 26px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 5px 10px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;

      color: #8D94A0;

      border: 1px solid #8D94A0;
      border-radius: 8px;
    }
  }
  .Main-Middle-Count{
    position: relative;
    display: flex;
    top: 32px;
    color: #353C49;
    width: 170px;
    height: 24px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    flex: none;
    order: 0;
    flex-grow: 0;
    
    .Main-Middle-left-Count{
      width: 110px;
      height: 24px;
    }
    .Main-Middle-right-Count{
      position: relative;
      width: 50px;
      height: 24px;
      left: 16px;
    }
  }

  .Main-Content{
    position: relative;
    width: 960px;
    // height: 1244px;
    top: 40px;
  }

  .ingredient{
    color: rgb(72, 128, 238);
  }
`;

// class Main extends Component {
const Main: React.FC = () => {
  const [areaValue, setareaValue] = useState("검색어를 입력");
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => setareaValue(e.target.value);

  return (
    <Container>
      <p className="Main-Header-Text">도서 검색</p>
      <div className="Main-Header">
        <div className="Main-Header-Search">
          <Search />
          {/* <Textarea value={areaValue} onChange={onChangeDescription} /> */}
        </div>
        <div className="Main-Header-Button">상세검색</div>
      </div>
      <div className="Main-Middle-Count">
        <div className="Main-Middle-left-Count">도서 검색 결과</div>
        <div className="Main-Middle-right-Count">총 
          <span className="ingredient">0</span>건
        </div>
      </div>
      {/* <Nodata /> */}
      <BookList />
      {/* <div className="Main-Content"> */}
      {/* </div> */}
    </Container>
  );
}

export default Main;
