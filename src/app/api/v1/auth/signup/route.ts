import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signupBodyTypes } from "@/BackendLib/lib/backendTypes.js";
import { checkFormDataError } from "@/BackendLib/Middleware/helper";
import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from "@/BackendLib/Middleware/ErrorHandler";
import { sendEmailOfPincode } from "@/BackendLib/lib/helper";
import { NextRequest, NextResponse } from "next/server";
import {
  getSignupSchema,
  signUpValidation,
} from "@/BackendLib/Middleware/Validation";

const prisma = new PrismaClient();
type resType = {
  name: string | null;
  id: string;
  email: string;
};

//// signup auth controller
export const POST = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    if (req.method !== "POST")
      return ErrorMessage("POST method not supported", 405);
    const userdata: signupBodyTypes = await req.json();
    const results = await getSignupSchema()?.safeParseAsync(userdata);
    if (!results.success)
      return ErrorMessage(JSON.parse(results.error.message)[0]?.message);

    const user = await prisma.user.findUnique({
      where: {
        email: userdata.email,
      },
    });

    if (user?.email) return ErrorMessage("User already exists!", 409);

    const salting = 10;
    const bcryptPassword = await bcrypt.hash(userdata.password, salting);

    const getData = await prisma.user.create({
      data: {
        name: userdata.name,
        email: userdata.email,
        password: bcryptPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
      },
    });

    const resData: resType = getData;
    return SuccessMessage<resType>("User created successfully!", 201, resData);
  }
);
