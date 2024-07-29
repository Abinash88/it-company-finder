import Jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { accessToken } from './helper';
import nodemailer from 'nodemailer';
import { NODEMAILER_EMAIL, NODEMAILER_PASSWORD, WEB_URL } from '../config';

type tokentype = { _id: string; iat: number; exp: number };

// generate a token
export const CreateToken = (id: string, time: string) => {
  const secret = process.env.TOKEN_SECRECT_KEY;
  if (!secret) throw new Error('secret key is not defined!');
  return Jwt.sign({ _id: id?.toString() }, secret, { expiresIn: time });
};

//verify token
export const verifyToken = (token: string): tokentype | Error => {
  const secret = process.env.TOKEN_SECRECT_KEY;
  if (!secret) throw new Error('secret key is required');
  try {
    return Jwt.verify(token, secret) as tokentype;
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    return error;
  }
};

// set token in the cookie
export const CookieSetter = (
  res: NextResponse,
  token: string,
  isSetToken: boolean,
  tokenType: string
) => {
  try {
    cookies().set(tokenType, isSetToken ? token : '', {
      path: '/',
      httpOnly: true,
      maxAge: isSetToken ? 15 * 24 * 60 * 60 * 1000 : 0,
    });
  } catch (err) {
    console.log(err);
  }
};

//generate verification code
export const generateVerificationCode = () => {
  let code = '';
  const limit = 4;
  const numbers = '0123456789';

  for (let i = 0; i < limit; i++) {
    code += numbers[Math.floor(Math.random() * 10)];
  }
  return code;
};

export const getCookies = (req: NextRequest): string | null => {
  const userToken = req.headers.get('Authorization');

  const token = cookies().get(accessToken)?.value;
  return token || userToken;
};

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASSWORD,
  },
});

export const sendVerifyEmail = async ({
  email,
  id,
}: {
  email: string;
  id: string;
}) => {
  const token = CreateToken(id, '5m');

  await transporter.sendMail({
    from: NODEMAILER_EMAIL,
    to: email,
    subject: 'Email Verification',
    text: `Your otp verification code: ${WEB_URL}verify-email?token=${token}`,
  });
};
