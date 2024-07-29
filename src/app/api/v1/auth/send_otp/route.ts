import {
  ErrorMessage,
  SuccessMessage,
} from '@/backend/Middleware/ErrorHandler';
import { sendEmailOfPincode } from '@/backend/lib/helper';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  if (!body) return ErrorMessage('Email not found!', 404);
  sendEmailOfPincode(body.email);
  return SuccessMessage(`Otp sent successfully to ${body.email}`, 200);
};
