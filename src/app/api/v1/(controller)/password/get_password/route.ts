import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from '@/backend/Middleware/ErrorHandler';
import { accessToken, prisma } from '@/backend/lib/helper';
import { verifyToken } from '@/backend/lib/utils';
import { cookies } from 'next/headers';

export const GET = AuthMiddleware(async (req: Request) => {
  if (req.method !== 'GET')
    return ErrorMessage('GET method only supported!', 400);
  const userToken = req.headers.get('Authorization')?.split(' ')[1].trim();
  const token = cookies().get(accessToken)?.value;
  if (!token && !userToken) return ErrorMessage('token not Found!', 403);
  const getToken = token! || userToken!;
  const user = verifyToken(getToken);
  if (user instanceof Error) return ErrorMessage('Invalid Token', 401);

  const data = await prisma.addPassword.findMany({
    where: {
      User: {
        id: user._id,
      },
    },
  });
  return SuccessMessage('Password fetched successfully.', 200, data);
});
