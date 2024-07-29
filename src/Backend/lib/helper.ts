import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';
import { generateVerificationCode } from './utils';
import { ErrorMessage, SuccessMessage } from '../Middleware/ErrorHandler';
import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';

const prisma = new PrismaClient();

export { prisma };

export const accessToken = 'accessToken';
export const refreshToken = 'refreshToken';

//VERIFICATION CODE EMAIL SENDER LOGIC START HERE
let verificationCode: string = '';

export const sendEmailOfPincode = (email: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.MAILING_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  verificationCode = generateVerificationCode();

  const mailOptions = {
    from: 'subediabinas@gmail.com',
    to: email,
    subject: 'hello world',
    text: `Your password reset code is ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      return ErrorMessage('Error sending mail!', 400);
    }
    SuccessMessage(`Verificaton code is sent to your email: ${email}.`, 200);
  });

  setTimeout(() => {
    verificationCode = '';
  }, 60000);
};
//VERIFICATION CODE EMAIL SENDER LOGIC END HERE

//VERIFICATION CODE VERIFY HERE
export const VerifyPincode = (code: string) => {
  if (verificationCode) {
    if (code === verificationCode) {
      return 'SUCCESS';
    } else {
      return 'FAILED';
    }
  } else {
    return 'EXPIRE';
  }
};
//VERIFICATION CODE VERIFY HERE

//GET FORM DATA IN OBJECT
export const GetFormData = <T>(data: FormData, key: string[]): T => {
  const passwordData: Record<string, any> = {};
  for (let i = 0; i < key.length; i += 1) {
    const formdata = data.get(key[i]);
    if (formdata) passwordData[key[i]] = formdata;
  }

  return passwordData as T;
};
//GET FORM DATA IN OBJECT

export const HandleMulterMiddleware = (
  req: NextRequest,
  res: NextResponse,
  upload: any
) => {
  return new Promise((resolve, reject) => {
    upload(req, res, (result: unknown) => {
      if (result instanceof Error) return reject(result.message);
      return resolve(result);
    });
  });
};
