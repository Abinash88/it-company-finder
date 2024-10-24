import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from '@/backend/Middleware/ErrorHandler';
import { prisma } from '@/backend/lib/helper';
import { verifyToken } from '@/backend/lib/utils';
import { cookies } from 'next/headers';

export const GET = AuthMiddleware(async (req: Request) => {
  if (req.method !== 'GET') return ErrorMessage('GET method only supported.');

  const getToken = cookies().get('accessToken')?.value;

  const getHeaderToken = req.headers.get('authorization')?.split(' ')[1];

  const Token: string | undefined = getToken || getHeaderToken;

  if (!Token) return ErrorMessage('token not Found!', 401);

  const GetId = verifyToken(Token);

  if (GetId instanceof Error) return ErrorMessage('Invalid  Tokens!', 401);

  const user = await prisma.user.findUnique({
    where: {
      id: GetId._id,
    },
    select: {
      email: true,
      id: true,
      name: true,
      password: false,
      createdAt: true,
      updatedAt: true,
    },
  });

  return SuccessMessage('User get successfully!', 200, user);
});
