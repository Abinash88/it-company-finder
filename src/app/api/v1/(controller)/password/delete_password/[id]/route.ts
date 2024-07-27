import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from '@/backend/Middleware/ErrorHandler';
import { prisma } from '@/backend/lib/helper';
import { getCookies, verifyToken } from '@/backend/lib/utils';
import { NextRequest } from 'next/server';

export const POST = AuthMiddleware(async (req: NextRequest) => {
  if (req.method !== 'POST')
    return ErrorMessage('POST method only supported!', 500);
  const path = req.nextUrl.pathname;
  const passwordId = path.split('/api/v1/password/delete_password/').pop();
  const token = getCookies(req);

  if (!token) return ErrorMessage('Token not found!', 403);

  const { _id: userId } = verifyToken(token);

  const findPassword = await prisma.addPassword.findFirst({
    where: {
      User: {
        id: userId,
      },
      id: passwordId,
    },
  });

  if (!findPassword) return ErrorMessage('Password do not exist', 404);

  const findPasswordName = await prisma.addPassword.delete({
    where: {
      User: {
        id: userId,
      },
      id: passwordId,
    },
  });

  return SuccessMessage('Password deleted successfully', 200, findPasswordName);
});
