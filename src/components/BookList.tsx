import React from "react";
import styled from "styled-components";
import Button from "./common/Button";
import book from "../asset/book.png";
import { ReactComponent as Arrow } from '../asset/Arrow.svg';
import BookInfoDetail from "./BookInfoDetail";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 40px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  .book-info{
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    justify-items: center;
    align-items: center;
    border-bottom: 1px solid #D2D6DA;
    img{
      width: 48px;
      height: 68px;
      position: relative;
      left: 48px;
    }
    .book-header{
      width: 104px;
      height: 26px;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      color: #353C49;
      
      left: 100px;
      position: relative;
    }
    .book-author{
      width: 105px;
      height: 22px;

      font-weight: 500;
      font-size: 14px;
      line-height: 22px;

      display: flex;
      align-items: center;

      color: #8D94A0;

      left: 120px;
      position: relative;
    }
    .book-price{
      width: 76px;
      height: 26px;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      text-align: right;
      color: #353C49;
      left: 250px;
      position: relative;      
    }

    .book-buy-button{
      position: relative;
      left: 400px;
    }

    .book-detail-button{
      position: relative;
      left: 410px;
      padding: 0px 8px;
      svg{
        margin-right: 0;
      }
    }
  }
`;

const BookList: React.FC = () => {


  return (
    <Container>
      <div className="book-info">
        <img src={book} alt="" />
        <p className="book-header">노르웨이 숲</p>
        <p className="book-author">무라카미 하루키</p>
        <p className="book-price">13,300원</p>
        <Button className="book-buy-button" width="115px" type="submit" color="#FFFFFF" background="#4880EE">
          구매하기 
        </Button>
        <Button className="book-detail-button" width="115px" type="submit" color="#6D7582" background="#F2F4F6">
          상세보기
          <Arrow />
        </Button>
      </div>
      <BookInfoDetail />
    </Container>
  );
};

export default BookList;
