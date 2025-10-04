

import * as yup from "yup"
export const registerSchema = yup.object().shape({
    name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    mobile: yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(8, "Phone number must be at least 8 digits"),
    mobile_country_code: yup.string()
      .required("Country code is required")
      .matches(/^[0-9]+$/, "Country code must be digits only")
      .max(4, "Country code must not exceed 4 digits"),
    password: yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
    password_confirmation: yup.string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  })