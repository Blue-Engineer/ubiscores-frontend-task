import React from "react";
import router from "next/router";
import Button from "components/button";
import { HeadingOne, ParagraphOne } from "styles/typography";
import { TC, TextBlock } from "../getStartedForm/form.styles";

const Success = ({ changeStep }: any) => {
  return (
    <div>
      <TextBlock>
        <HeadingOne>Thank You...</HeadingOne>
        <ParagraphOne>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
        </ParagraphOne>
      </TextBlock>

      <Button
        type="submit"
        variant="primary"
        width="256"
        onClick={() => changeStep(1)}
        style={{ margin: "30px 0" }}
      >
        Back to Home
      </Button>

      <TC>
        <p>
          Questions? Email us <span>help@ubiscore.com</span>
        </p>
      </TC>
    </div>
  );
};

export default Success;
