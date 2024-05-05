import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from "@/BackendLib/Middleware/ErrorHandler";
import { signupBodyTypes } from "@/BackendLib/lib/backendTypes";
import { accessToken, prisma, refreshToken } from "@/BackendLib/lib/helper";
import bcrypt from "bcrypt";
import { CookieSetter, CreateToken } from "@/BackendLib/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { getLoginSchema } from "@/BackendLib/Middleware/Validation";

// Login auth controller
export const POST = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    if (req.method !== "POST")
      return ErrorMessage("Post method only supported", 400);

    const userData: Omit<signupBodyTypes, "name"> = await req.json();
    const results = await getLoginSchema().safeParseAsync(userData);
    if (!results.success)
      return ErrorMessage(JSON.parse(results.error.message)[0]?.message, 400);

    const data = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    if (!data) return ErrorMessage("User not found!", 404);
    if (!data.isVerified) return ErrorMessage("Email is not verified!", 400);
    const compare = await bcrypt.compare(userData?.password, data?.password);

    if (!compare) return ErrorMessage("Password incorrect!", 401);
    const access_token = CreateToken(data?.id, "2m");
    const refresh_token = CreateToken(data?.id, "10m");
    const setAccess = CookieSetter(res, access_token, true, accessToken);
    const setRefresh = CookieSetter(res, refresh_token, true, refreshToken);
    console.log(setAccess, setRefresh);
    return NextResponse.json({
      success: true,
      message: "Login Successfully.",
      access_token,
      refresh_token,
    });
  }
);
