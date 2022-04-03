import styled from "styled-components";

export const SelectInputComponentStyle = styled.div<{ error?: boolean }>`
  width: 100%;
  .react-select__value-container
    .react-select__value-container--is-multi
    .css-g1d714-ValueContainer {
    &:focus-visible {
      outline: none;
      border: 1px solid transparent;
    }
  }

  .react-select__value-container {
    width: 100%;
  }

  .react-select__control {
    background-color: transparent;
    height: 54px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    padding: 0 32px;
    color: ${({ theme }) => theme.colors?.primary};
    border: none;
  }

  .react-select__placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors?.primary};
  }

  .react-select__indicator-seperator {
    display: none !important;
  }

  .react-select__single-value {
    font-weight: 400;
    color: ${({ theme }) => theme.colors?.primary};
  }

  .react-select__multi-value__label {
    background: rgb(255 255 255 / 58%);
    color: ${({ theme }) => theme.colors?.primary};
  }

  .react-select__multi-value {
    background: rgba(0, 126, 255, 0.08);
    color: ${({ theme }) => theme.colors?.primary};
    border: 1px solid ${({ theme }) => theme.colors?.border};
    margin: 5px 8px;

    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`;
