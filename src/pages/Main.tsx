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

  .search-room-bar-guests-texts {
    position: absolute;
    width: calc(100% - 114px);
    top: 16px;
    left: 20px;
  }
  .search-room-bar-guests-label {
    font-size: 10px;
    font-weight: 800;
    margin-bottom: 4px;
  }
  .search-room-bar-guests-popup {
    position: absolute;
    width: 394px;
    top: 78px;
    right: 0;
    padding: 16px 32px;
    background-color: white;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
    cursor: default;
  }
  .search-room-bar-guests-counter-wrapper {
    padding: 16px 0;
    border-bottom: 1px solid ${palette.gray_eb};
    &:last-child {
      border: 0;
    }
  }
  .search-room-bar-guests-text {
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .search-room-bar-button-wrapper {
    position: absolute;
    right: 0;
    top: 9px;
    right: 12px;
  }
`;

// class Main extends Component {
const Main: React.FC = () => {
  // const {openModal, ModalPortal, closeModal} = useModal();
  const [popupOpened, setPopupOpened] = useState(false);
  // const [areaValue, setareaValue] = useState("검색어를 입력");
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => setareaValue(e.target.value);

    //* 로그인 클릭시
  /* const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidateMode(true);
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해 주세요.");
    } else {
      const loginBody = { email, password };

      try {
        const { data } = await loginAPI(loginBody);
        dispatch(userActions.setLoggedUser(data));
        closeModal();
      } catch (e) {
        console.log(e.response);
      }
    }
  }; */
  return (
    <Container>
      <p className="Main-Header-Text">도서 검색</p>
      <div className="Main-Header">
        <div className="Main-Header-Search">
          <Search />
          <input type="text" placeholder="검색어 입력"/>
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
      <OutsideClickHandler onOutsideClick={() => setPopupOpened(false)}>
        <div className="search-room-bar-guests-texts">
          <p className="search-room-bar-guests-label">인원</p>
          <p className="search-room-bar-guests-text">{guetsText}</p>
        </div>

        <div className="search-room-bar-button-wrapper">
          <SearchRoomButton />
        </div>
        {popupOpened && (
          <div className="search-room-bar-guests-popup">
            <div className="search-room-bar-guests-counter-wrapper">
              <Counter
                label="성인"
                description="만 13세 이상"
                onChange={(count) => setAdultCountDispatch(count)}
                minValue={1}
                value={adultCount}
              />
            </div>
            <div className="search-room-bar-guests-counter-wrapper">
              <Counter
                label="어린이"
                description="2~12세"
                value={childrenCount}
                onChange={(count) => setChildrenCountDispatch(count)}
              />
            </div>
            <div className="search-room-bar-guests-counter-wrapper">
              <Counter
                label="유아"
                description="2세 미만"
                value={infantsCount}
                onChange={(count) => setInfantsCountDispatch(count)}
              />
            </div>
          </div>
        )}
      </OutsideClickHandler>
      {/* <ModalPortal>
        <SearchModal closeModal={closeModal}/>
      </ModalPortal> */}
    </Container>
  );
}

export default Main;
