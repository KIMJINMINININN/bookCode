import React from "react";
import styled from "styled-components";
import Button from "./common/Button";
import book from "../asset/book.png";
import { ReactComponent as Arrow } from '../asset/Arrow.svg';

const Container = styled.div`
  width: 100%;
  height: 344px;
  position: relative;
  font-family: 'Noto Sans KR';
  font-style: normal;
  display: flex;
  border-bottom: 1px solid #D2D6DA;
  .book-detail-left{
    width: 30%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    img{
      width: 200px;
      height: 264px;
      position: relative;
      left: 48px;
    }
  }
  .book-detail-middle{
    width: 42%;
    height: 90%;
    position: relative;
    display: inline;
    margin-top: 33px;
    .book-detail-middle-top{
      width: 100%;
      height: 30px;
      display: flex;

      .book-detail-middle-header{
        width: 104px;
        height: 26px;
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        color: #353C49;
        
        position: relative;
      }
      .book-detail-middle-author{
        width: 125px;
        height: 22px;
  
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
  
        display: flex;
        align-items: center;
  
        color: #8D94A0;
  
        position: relative;
        padding-left: 20px;
      }
    }
    .book-detail-middle-intro{
      width: 100%;
      height: 26px;
      font-weight: 700;
      font-size: 14px;
      line-height: 26px;
      color: #353C49;
      text-align: left;
      padding-left: 5px;
    }
    .book-detail-middle-bottom{
      width: 360px;
      height: 180px;
      font-weight: 500;
      font-size: 10px;
      line-height: 16px;
      color: #353C49;
      position: relative;
      top: 16px;
    }
  }
  .book-detail-right{
    width: 28%;
    height: 90%;
    position: relative;
    margin-top: 33px;
    .book-detail-right-price1{
      width: 108px;
      height: 26px;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      text-align: right;
      color: #353C49;
      position: relative;
      display: flex;
      margin-left: 160px;
      .book-detail-right-price1-title{
        font-weight: 500;
        font-size: 10px;
        line-height: 22px;
        text-align: right;
        color: #8D94A0;
        margin-right: 6px;
      }
      .book-detail-right-ori-price{
        text-decoration-line: line-through;
        font-weight: 350;
      }
    }

    .book-detail-right-price2{
      width: 111px;
      height: 26px;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      text-align: right;
      color: #353C49;
      position: relative;
      display: flex;
      margin-left: 144px;
      .book-detail-right-price2-title{
        font-weight: 500;
        font-size: 10px;
        line-height: 22px;
        text-align: right;
        color: #8D94A0;
        margin-right: 6px;
      }
      .book-detail-right-sale-price{
      }
    }

    .book-detail-right-price{
      width: 76px;
      height: 26px;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      text-align: right;
      color: #353C49;
      position: relative;      
    }

    .book-buy-button{
      position: relative;
      left: 15px;
    }

    .book-detail-button{
      position: relative;
      padding: 0px 8px;
      margin-left: 140px;
      svg{
        margin-right: 0;
      }
    }
  }
`;

const BookInfoDetail: React.FC = () => {
  return (
    <Container>
      <div className="book-detail-left">
        <img src={book} alt="" />
      </div>
      <div className="book-detail-middle">
        <div className="book-detail-middle-top">
          <p className="book-detail-middle-header">노르웨이 숲</p>
          <p className="book-detail-middle-author">무라카미 하루키</p>
        </div>
        <p className="book-detail-middle-intro">책 소개</p>
        <div className="book-detail-middle-bottom">
        “나를 언제까지나 잊지 마, 내가 여기 있었다는 걸 기억해 줘.”

하루키 월드의 빛나는 다이아몬드
무라카미 하루키를 만나기 위해 가장 먼저 읽어야 할 책!

페이지를 처음 펼치는 오늘의 젊음들에게, 그리고 오랜 기억 속에 책의 한 구절을 간직하고 있는 어제의 젊음들에게, 한결같은 울림으로 예민하고 섬세한 청춘의 감성을 전하며 영원한 필독서로 사랑받고 있는 무라카미 하루키의 대표작 『노르웨이의 숲』. 1989년 『상실의 시대』라는 제명으로 처음 출간된 이래 우리 출판 사상 최장기 베스트셀러를 기록하며 하나의 사건으로 남은 소설, 『노르웨이의 숲』이 민음사 세계문학전집에 이어 단행본으로 출간되었다.

        </div>
      </div>
      <div className="book-detail-right">
        <Button className="book-detail-button" width="115px" type="submit" color="#6D7582" background="#F2F4F6">
          상세보기
          <Arrow />
        </Button>
        <div className="book-detail-right-price1">
          <p className="book-detail-right-price1-title">원가</p>
          <p className="book-detail-right-ori-price">16,000원</p>
        </div>
        <div className="book-detail-right-price2">
          <p className="book-detail-right-price2-title">할인가</p>
          <p className="book-detail-right-sale-price">13,500원</p>
        </div>
        <Button className="book-buy-button" width="240px" type="submit" color="#FFFFFF" background="#4880EE">
          구매하기 
        </Button>
      </div>
    </Container>
  );
};

export default BookInfoDetail;
