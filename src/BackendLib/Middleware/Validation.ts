import { body } from "express-validator";

export const signUpValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required!")
    .isString()
    .isLength({ max: 100, min: 5 })
    .withMessage("Username must be at least 5 to 100 char."),
  body("password")
    .notEmpty()
    .withMessage("Password is required!")
    .isLength({ min: 5, max: 20 })
    .withMessage("password should be greater than 5 to 20 characters."),
  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail({ allow_display_name: true })
    .withMessage("Please enter a valid email address."),
];
    
export const loginValidation = [
  body("password").notEmpty().withMessage("Password is required!"),
  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail({ allow_display_name: true })
    .withMessage("Please enter a valid email address."),
];

export const changePinCodeEmailValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail({ allow_display_name: true })
    .withMessage("Please enter a valid email address!"),
];

export const pincodeVerification = [
  body("passwordpin")
    .notEmpty()
    .withMessage("Present feild should not be empty!")
    .isString()
    .equals("4")
    .withMessage("Number field must be exactly 4 characters."),
];

export const addingPasswordValidation = [
  body("password")
    .notEmpty()
    .withMessage("Please fill up your empty field.")
    .matches(/^[a-zA-Z0-9\s]+$/, "g")
    .withMessage("Text field can only contain letters, numbers, and spaces"),

  body("socialName").notEmpty().withMessage("Please fill up your empty field."),
];

export const deletePasswordValidation = [
  body("userId")
    .notEmpty()
    .withMessage("Please fill up your empty field.")
    .matches(/^[a-zA-Z0-9\s]+$/, "g")
    .withMessage("Text field can only contain letters, numbers, and spaces"),
  body("socialName")
    .notEmpty()
    .withMessage("Please fill up your empty field")
    .matches(/^[a-zA-Z0-9\s]+$/, "g")
    .withMessage("Text field can only contain letters, numbers, and spaces"),
];
