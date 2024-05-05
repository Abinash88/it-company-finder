import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";
import { generateVerificationCode } from "./utils";
import { ErrorMessage, SuccessMessage } from "../Middleware/ErrorHandler";

const prisma = new PrismaClient();

export { prisma };

export const accessToken = "accessToken";
export const refreshToken = "refreshToken";

//VERIFICATION CODE EMAIL SENDER LOGIC START HERE
let verificationCode: string = "";

export const sendEmailOfPincode = (email: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "subediabinas@gmail.com",
      pass: "smnk jjes hrvb rmwg",
    },
  });

  verificationCode = generateVerificationCode();

  const mailOptions = {
    from: "subediabinas@gmail.com",
    to: email,
    subject: "hello world",
    text: `Your password reset code is ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      return ErrorMessage("Error sending mail!", 400);
    }
    SuccessMessage(`Verificaton code is sent to your email: ${email}.`, 200);
  });

  setTimeout(() => {
    verificationCode = "";
  }, 60000);
};
//VERIFICATION CODE EMAIL SENDER LOGIC END HERE

//VERIFICATION CODE VERIFY HERE
export const VerifyPincode = (code: string) => {
  console.log(verificationCode, "verifypincode");
  if (verificationCode.length === 4) {
    if (code === verificationCode) {
      return SuccessMessage("verification Completed successfully.", 200);
    } else {
      return ErrorMessage("Pincode didn't match!", 400);
    }
  } else {
    return ErrorMessage("Verification code Expires!", 400);
  }
};
//VERIFICATION CODE VERIFY HERE
