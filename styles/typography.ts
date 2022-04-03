import styled from "styled-components";

export const HeadingOne = styled.h1<{ color?: string }>`
  color: ${({ theme, color }) => color ?? theme.colors?.primary};
  font-size: 28px;
  line-height: 29px;
  font-weight: ${({ theme }) => theme.fontWeights?.bold};
  padding: 8px 0;
`;

export const HeadingTwo = styled.h2<{ color?: string }>`
  color: ${({ theme, color }) => color ?? theme.colors?.white};
  font-size: 21px;
  font-weight: ${({ theme }) => theme.fontWeights?.semiBold};
  padding: 8px 0;
`;

export const ParagraphTwo = styled.p<{ color?: string; mw?: string }>`
  color: ${({ theme, color }) => color ?? theme.colors?.white02};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights?.regular};
  padding: 8px 0;
  max-width: ${({ mw }) => mw ?? "403"}px;
  line-height: 160%;
  letter-spacing: 1px;
`;

export const ParagraphOne = styled.p<{ color?: string }>`
  color: ${({ theme, color }) => color ?? theme.colors?.secondary};
  font-size: 18px;
  line-height: 32px;
  font-weight: ${({ theme }) => theme.fontWeights?.regular};
  padding: 8px 0;
  font-family: "Outfit";
`;

export const SmallText = styled.small<{ color?: string }>`
  color: ${({ theme, color }) => color ?? theme.colors?.white02};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights?.regular};
  padding: 8px 0;
  font-family: "Outfit";
`;
