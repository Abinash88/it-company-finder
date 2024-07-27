import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from '@/backend/Middleware/ErrorHandler';

import { signupBodyTypes } from '@/backend/lib/backendTypes';
import { sendVerifyEmail } from '@/backend/lib/utils';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();
export type resType = {
  name: string | null;
  id: string;
  email: string;
};

//// signup auth controller
export const POST = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    if (req.method !== 'POST')
      return ErrorMessage('POST method not supported', 405);
    const userdata: signupBodyTypes = await req.json();
    // const results = await getSignupSchema()?.safeParseAsync(userdata)
    // if (!results.success)
    //   return ErrorMessage(JSON.parse(results.error.message)[0]?.message)
    // const getData = await SignupServices({ userdata })
    const user = await prisma.user.findUnique({
      where: {
        email: userdata.email,
      },
    });

    if (user?.email) return ErrorMessage('User already exists!', 409);

    const salting = 10;
    const bcryptPassword = await bcrypt.hash(userdata.password, salting);
    const getData = await prisma.user.create({
      data: {
        name: userdata.name,
        email: userdata.email,
        password: bcryptPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
      },
    });

    await sendVerifyEmail({ email: getData?.email, id: getData?.id });

    return SuccessMessage<resType>(
      `User created. Verify Email from you inbox ${userdata?.email}`,
      201,
      getData
    );
  }
);
