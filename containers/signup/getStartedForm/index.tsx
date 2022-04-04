import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { getStartedSchema } from "./input-validations";
import SelectInput from "components/select";
import Input from "components/input";
import { TC, TextBlock } from "./form.styles";
import Button from "components/button";
import { HeadingOne, ParagraphOne } from "styles/typography";

type UseGetStartedForm = {
  website: string;
  name: string;
  referrer: string;
  email: string;
  acceptTerms: boolean;
};

const OPTIONS = [
  { label: "Google Ad", value: "googleAd" },
  { label: "LinkedIn", value: "linkedin" },
];

const GetStartedForm = ({ changeStep }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<UseGetStartedForm>({
    resolver: yupResolver(getStartedSchema),
  });

  const onSubmit = (data: UseGetStartedForm) => {
    setIsLoading(true);
    setTimeout(() => {
      changeStep(2);
    }, 1000);
  };

  return (
    <div>
      <TextBlock>
        <HeadingOne>Signup</HeadingOne>
        <ParagraphOne>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
        </ParagraphOne>
      </TextBlock>
      <form data-testid="form-box" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Organization Website URL"
          id="website"
          error={errors.website?.message}
          {...register("website")}
          data-testid="input"
        />

        <Input
          label="Work Email"
          id="email"
          error={errors.email?.message}
          {...register("email")}
          data-testid="input"
        />

        <Input
          label="Name"
          id="name"
          error={errors.name?.message}
          {...register("name")}
          data-testid="input"
        />
        <Controller
          control={control}
          name="referrer"
          render={({ field: { onChange } }) => (
            <SelectInput
              label="How did you hear about us?"
              required={true}
              placeholder="Please Select"
              error={errors.referrer?.message}
              onChange={(data: any) => onChange(data?.value)}
              options={OPTIONS}
              defaultValue={OPTIONS[0]}
              id="referrer"
            />
          )}
        />

        <div>
          <TC>
            <input
              type="checkbox"
              {...register("acceptTerms")}
              id="accept"
              checked={watch("acceptTerms")}
            />
            <p>
              Read and agree <span>Terms and Conditions.</span>
            </p>
          </TC>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="regular"
          isLoading={isLoading}
          style={{ margin: "30px 0" }}
        >
          Get started now
        </Button>

        <TC>
          <p>
            Already have an account? <span>Login</span>
          </p>
        </TC>
      </form>
    </div>
  );
};

export default GetStartedForm;
