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
    .required("Email is required!"),
  name: yup.string().required("Name is required!"),
  referrer: yup.string(),
  acceptTerms: yup.boolean(),
});
