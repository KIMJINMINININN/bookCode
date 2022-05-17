import React from "react";
import styled from "styled-components";
import Button from "./common/Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BookList: React.FC = () => {
  return (
    <Container>
        <Button width="59" type="submit" color="bittersweet">
          로그인
        </Button>
      <h1>List</h1>
    </Container>
  );
};

export default BookList;
