import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from '@/backend/Middleware/ErrorHandler';
import { CookieSetter } from '@/backend/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

export const GET = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    if (req.method !== 'GET')
      return ErrorMessage('GET method only supported!', 400);
    CookieSetter(res, 'token', false, '');

    return SuccessMessage('Logout successfully!', 200);
  }
);
