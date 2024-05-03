import { AuthMiddleware, ErrorMessage, SuccessMessage } from "@/BackendLib/Middleware/ErrorHandler";
import { prisma } from "@/BackendLib/lib/helper";
import { verifyToken } from "@/BackendLib/lib/utils";
import { cookies } from "next/headers"

export const GET = AuthMiddleware(
    async (req: Request, res: Response) => {
      if (req.method !== "GET") return ErrorMessage("GET method only supported.");
      const getToken = cookies().get('accessToken')?.value;
      const Token: string | undefined = getToken;
      if (!Token) return ErrorMessage("token not Found!", 401);
      const GetId = verifyToken(Token);
  
      if (!GetId) return ErrorMessage( "Invalid  Token!", 401);
  
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
  
      SuccessMessage("User created successfully!", 201, user);
    }
  );