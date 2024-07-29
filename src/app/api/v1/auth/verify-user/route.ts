import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from '@/backend/Middleware/ErrorHandler';
import { prisma } from '@/backend/lib/helper';
import { verifyToken } from '@/backend/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

export const POST = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    const bearer = await req.headers.get('Authorization');
    const token = bearer?.split(' ')[1];
    if (!token) return ErrorMessage('4 digit Otp is required');
    const verify = verifyToken(token);
    if (!verify) return ErrorMessage('Wrong authentication token', 401);
    await prisma.user.update({
      where: { id: verify._id },
      data: {
        isVerified: true,
      },
    });
    return SuccessMessage('Email Verified Successfully', 200);
  }
);
