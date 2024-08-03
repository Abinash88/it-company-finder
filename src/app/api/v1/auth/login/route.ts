import {
  AuthMiddleware,
  ErrorMessage,
} from '@/backend/Middleware/ErrorHandler';
import { signupBodyTypes } from '@/backend/lib/backendTypes';
import { accessToken, prisma, refreshToken } from '@/backend/lib/helper';
import bcrypt from 'bcrypt';
import {
  CookieSetter,
  CreateToken,
  sendVerifyEmail,
} from '@/backend/lib/utils';
import { NextRequest, NextResponse } from 'next/server';
import { getLoginSchema } from '@/backend/Middleware/Validation';

// Login auth controller
export const POST = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    if (req.method !== 'POST')
      return ErrorMessage('Post method only supported', 400);

    const userData: Omit<signupBodyTypes, 'name'> = await req.json();
    const results = await getLoginSchema().safeParseAsync(userData);
    if (!results.success)
      return ErrorMessage(JSON.parse(results.error.message)[0]?.message, 400);

    const data = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    if (!data) return ErrorMessage('User not found!', 404);
    if (data && !data.isVerified) {
      await sendVerifyEmail({ email: data?.email, id: data?.id });
      return ErrorMessage('Email is not verified!', 400);
    }

    const compare = await bcrypt.compare(userData?.password, data?.password);

    if (!compare) return ErrorMessage('Password incorrect!', 401);
    const access_token = CreateToken(data?.id, '40m');
    const refresh_token = CreateToken(data?.id, '60m');
    CookieSetter(res, access_token, true, accessToken);
    CookieSetter(res, refresh_token, true, refreshToken);
    return NextResponse.json({
      success: true,
      message: 'Login Successfully.',
      access_token,
      refresh_token,
    });
  }
);
