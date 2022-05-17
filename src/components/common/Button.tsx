import React from "react";
import styled, { css } from "styled-components";

interface StyledButtonProps{
  width: string | undefined;
}

const Container = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 15px;
  border: 0;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  width: ${(props) => props.width};
  background: #4880EE;
  svg {
    margin-right : 12px;
  }
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  color?: string;
  width: string;
  colorReverse?: boolean;
  icon?: JSX.Element;
}

const Button: React.FC<IProps> = ({
  children,
  color,
  width,
  icon,
  ...props
}) => {
  return (
    <Container {...props} color={color} width={width}>
      {icon}
      {children}
    </Container>
  );
};

export default React.memo(Button);