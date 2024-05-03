import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from "@/BackendLib/Middleware/ErrorHandler";
import { CookieSetter } from "@/BackendLib/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const POST = AuthMiddleware(async (req: NextRequest, res: NextResponse) => {
  if (req.method !== "GET")
    return ErrorMessage("GET method only supported!", 400);
  CookieSetter(res, "token", false, "");

  SuccessMessage("Logout successfully!", 200);
});
