import React from "react";
import { HeadingTwo, ParagraphTwo, SmallText } from "styles/typography";
import { Dashes, Elipse, Triangle } from "layouts/signupLayout/svgs";
import { RightContent, LayoutWrapper, FormDiv } from "./layout.styles";

const SignupLayout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <LayoutWrapper>
      <RightContent>
        <div>
          <HeadingTwo>Jerrome Bell</HeadingTwo>
          <SmallText>Product Desginer</SmallText>
          <ParagraphTwo style={{ margin: "20px 0" }}>
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit”
          </ParagraphTwo>

          <Dashes />
          <Triangle />
          <Elipse />
        </div>
      </RightContent>
      <div className="hidden"></div>
      <FormDiv>{children}</FormDiv>
    </LayoutWrapper>
  );
};

export default SignupLayout;
