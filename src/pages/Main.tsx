import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Textarea from 'components/common/Textarea';
import { ReactComponent as Search } from '../asset/Search.svg';
import Nodata from 'components/Nodata';
import BookList from 'components/BookList';
import useModal from "../hooks/useModal";
import SearchModal from "../components/modal/SearchModal";
import OutsideClickHandler from 'react-outside-click-handler';
import Button from 'components/common/Button';


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
      svg{
        position: relative;
        left: 5px;
      }
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

      cursor: pointer;
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

  .search-book-modal{
    position: absolute;
    width: 100%;
    height: 70px;
    border: 2px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    bottom: 739px;
    right: 200px;
    .search-book-modal-popup {
      position: absolute;
      background: #FFFFFF;
      box-shadow: 0px 4px 14px 6px rgba(151, 151, 151, 0.15);
      border-radius: 8px;
      width: 360px;
      height: 210px;
      right: 0px;
    }
    .search-book-modal-button-popup {
      display: flex;
      padding: 16px 0;
      &:last-child {
        border: 0;
      }
    }
  }

  
`;

// class Main extends Component {
const Main: React.FC = () => {
  const [popupOpened, setPopupOpened] = useState(false);

  return (
    <Container>
      <p className="Main-Header-Text">도서 검색</p>
      <div className="Main-Header">
        <div className="Main-Header-Search">
          <Search />
          <input type="text" placeholder="검색어 입력" />
        </div>
        <div className="Main-Header-Button" onClick={() => setPopupOpened(true)}>상세검색</div>
      </div>
      <div className="Main-Middle-Count">
        <div className="Main-Middle-left-Count">도서 검색 결과</div>
        <div className="Main-Middle-right-Count">총
          <span className="ingredient">0</span>건
        </div>
      </div>
      {/* <Nodata /> */}
      <BookList />
      <div className="search-book-modal">
        <OutsideClickHandler onOutsideClick={() => setPopupOpened(false)}>
          {popupOpened && (
            <div className="search-book-modal-popup">
              <div className="search-book-modal-button-popup">
                <Button className="book-detail-button" width="86px" type="submit" color="#6D7582" background="#F2F4F6" fontsize="14px" height="32px">
                  초기화
                </Button>
                <Button className="book-buy-button" width="86px" type="submit" color="#FFFFFF" background="#4880EE" fontsize="14px" height="32px">
                  검색하기
                </Button>
              </div>
            </div>
          )}
        </OutsideClickHandler>
      </div>
    </Container>
  );
}

export default Main;
