import * as yup from "yup"
export const loginSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email format"),
    password: yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
  })
  export const verifySchema = yup.object().shape({
    code: yup
      .string()
      .required("Code is required")
      .matches(/^[0-9]{6}$/, "Code must be 6 digits"),
  })