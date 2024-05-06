import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from "@/BackendLib/Middleware/ErrorHandler";
import { accessToken, prisma } from "@/BackendLib/lib/helper";
import { verifyToken } from "@/BackendLib/lib/utils";
import { cookies } from "next/headers";

export const GET = AuthMiddleware(async (req: Request, res: Response) => {
  if (req.method !== "GET")
    return ErrorMessage("GET method only supported!", 400);
  const userToken = req.headers.get("Authorization");

  const token = cookies().get(accessToken)?.value;
  if (!token && !userToken) return ErrorMessage("token not Found!", 403);
  const getToken = token! || userToken!;
  //CHECK THE USER AND ADD THE PASSWORD
  const { _id: user } = verifyToken(getToken);
  const data = await prisma.addPassword.findMany({
    where: {
      User: {
        id: user,
      },
    },
  });

  return SuccessMessage("Password fetched successfully.", 200, data);
});
