import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from "@/BackendLib/Middleware/ErrorHandler";
import { VerifyPincode, prisma } from "@/BackendLib/lib/helper";
import { NextRequest, NextResponse } from "next/server";

export const POST = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    if (req.method !== "POST")
      return ErrorMessage("POST method only supported");
    const body: { id: string; otp: string } = await req.json();
    if (!body) return ErrorMessage("4 digit Otp is required");
    const verified = VerifyPincode(body.otp);
    await prisma.user.update({
      where: { id: body.id },
      data: {
        isVerified: true,
      },
    });
    return verified;
  }
);
