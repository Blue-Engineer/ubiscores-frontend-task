import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { IInputProps } from "./i-input";

export const Div = styled.div<{ fullWidth?: boolean | undefined }>`
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 2em;
`;

export const Label = styled.legend`
  margin-left: 32px;
  pointer-events: none;
  white-space: nowrap;
  font-size: 14px;
  padding: 0 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.label};
  transition: color ease-in-out 0.2s;
`;

export const InputFieldWrapperDiv = styled.fieldset`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors?.border};
  transition: border ease-in-out 0.2s;

  ${Div}:focus-within & {
    border: solid 1px ${({ theme }) => theme.colors?.blue};
  }

  ::before,
  ::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const InputField = styled.input<IInputProps>`
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  appearance: none;
  border-radius: 0;
  box-sizing: border-box;
  border-radius: 0px;
  background-color: transparent;
  height: 50px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors?.primary};
  padding: 0 40px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #000 !important;
  }

  &:disabled {
    background-color: hsl(0, 0%, 95%);
  }
`;

export const ErrorP = styled(motion.p)<{ easyFlow?: boolean }>`
  margin: 0.1rem 0 0 0;
  color: ${({ theme }) => theme.colors?.error};
  font-size: 14px;
  letter-spacing: -0.01rem;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeights?.regular};

  ${({ easyFlow }) =>
    easyFlow &&
    css`
      margin: 0;
      position: absolute;
      left: 65px;
      bottom: -21px;
      font-size: 11.5px;
    `}
`;
