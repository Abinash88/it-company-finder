import {
  ErrorMessage,
  SuccessMessage,
} from "@/BackendLib/Middleware/ErrorHandler";
import { sendEmailOfPincode } from "@/BackendLib/lib/helper";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  if (!body) return ErrorMessage("Email not found!", 404);
  console.log(body);
  sendEmailOfPincode(body.email);
  return SuccessMessage(`Otp sent successfully to ${body.email}`, 200);
};
