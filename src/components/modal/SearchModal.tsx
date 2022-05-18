import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Button from "../common/Button";
import { ReactComponent as CloseXIcon } from '../../asset/CloseXIcon.svg';

const Container = styled.form`
  width: 568px;
  padding: 32px;
  background-color: white;
  z-index: 11;

  .mordal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }

  .login-input-wrapper {
    position: relative;
    margin-bottom: 16px;
  }

  .login-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }

  .login-modal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
  .login-modal-set-signup {
    margin-left: 8px;
    cursor: pointer;
  }
`;

interface IProps {
  closeModal: () => void;
}

const LoginModal: React.FC<IProps> = ({ closeModal }) => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const dispatch = useDispatch();

  const onChangeFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirst(event.target.value);
  };
  const onChangeSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecond(event.target.value);
  };
  const onChangeThird = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThird(event.target.value);
  };

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
    <Container >
      <CloseXIcon className="mordal-close-x-icon" onClick={closeModal} />
      <div className="login-input-wrapper">
        <input
          placeholder="검색어 입력"
          type="text"
          value={first}
          onChange={onChangeFirst}
        />
      </div>
    </Container>
  );
};

export default LoginModal;
