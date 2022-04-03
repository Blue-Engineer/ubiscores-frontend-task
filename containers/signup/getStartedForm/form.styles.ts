import styled from "styled-components";

export const TC = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;

    p {
        font-size: 16px;
        color: #6D707A;
        font-weight: ${({ theme }) => theme.fontWeights?.regular};

        span {
            font-weight: ${({ theme }) => theme.fontWeights?.semiBold};
        color:  ${({ theme }) => theme.colors?.blue};
        padding-left: 5px;

        }
    }

    a {
        padding: 0 .3em;
        color:  ${({ theme }) => theme.colors?.blue};
        text-decoration: none;
    }

   input {
        accent-color: ${({ theme }) => theme.colors?.white};
        width: 24px;
        height: 24px;
        font-weight: 200;
        font-size: 10px;
        color:  ${({ theme }) => theme.colors?.primary};
        border: solid 1px ${({ theme }) => theme.colors?.border}
      }
   }
`;

export const TextBlock = styled.div`
  margin: 2em 0;
`;
