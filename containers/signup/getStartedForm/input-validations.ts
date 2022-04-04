import * as yup from "yup";

export const getStartedSchema = yup.object().shape({
  website: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Please enter website"),
  email: yup
    .string()
    .email(
      "Please enter your business email address. This form does not accepet addresses from gmail.com"
    )
    .matches(
      /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/,
      "Please enter your business email address. This form does not accepet addresses from gmail.com"
    )
    .required("Email is required!"),
  name: yup.string().required("Name is required!"),
  referrer: yup.string(),
  acceptTerms: yup.boolean(),
});
