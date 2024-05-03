import { NextRequest, NextResponse } from "next/server";

export const ErrorMessage = (message: string, statusCode: number = 500) => {
  return NextResponse.json({ success: false, message }, { status: statusCode });
};

export const SuccessMessage = <T>(
  message: string,
  statuscode: number = 200,
  data?: T
) => {
  return NextResponse.json(
    { success: true, message, data },
    { status: statuscode }
  );
};

export const AuthMiddleware =
  (fn: (req: NextRequest, res: NextResponse) => Promise<any>) =>
  (req: NextRequest, res: NextResponse) => {
    return Promise.resolve(fn(req, res)).catch((error) => ErrorMessage(error.message));
  };
