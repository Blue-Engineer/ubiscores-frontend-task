import React, { useEffect, useState } from "react";
import BrandImage from "components/brand-image";
import SignupLayout from "layouts/signupLayout";
import GetStartedForm from "./getStartedForm";
import Success from "./success";

const Signup = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("step changed")
  }, [step]);

  function handleView() {
    let content;
    switch (step) {
      case 2:
        content = <Success changeStep={setStep} />;
        break;

      case 1:
        content = <GetStartedForm changeStep={setStep} />;
        break;
    }
    return content;
  }

  return (
    <SignupLayout>
      <div className="overflow">
        <BrandImage />
        {handleView()}
      </div>
    </SignupLayout>
  );
};

export default Signup;
