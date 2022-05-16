import React from "react";
import ReactAutosizeTextarea from "react-autosize-textarea";
import styled from "styled-components";

const StyledTextarea = styled(ReactAutosizeTextarea)`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 216px;
  padding: 11px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  resize: none;
  font: inherit;
  & ::placeholder {
    color: #8D94A0;
  }
`;

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...props
}) => {
  return <StyledTextarea {...props} />;
};

export default React.memo(Textarea);
