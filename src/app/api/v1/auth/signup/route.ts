import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signupBodyTypes } from "@/BackendLib/lib/backendTypes.js";
import { checkFormDataError } from "@/BackendLib/Middleware/helper";
import { AuthMiddleware, ErrorMessage, SuccessMessage, initValidation } from "@/BackendLib/Middleware/ErrorHandler";
import { sendEmailOfPincode } from "@/BackendLib/lib/helper";
import { NextRequest, NextResponse } from "next/server";
import {createRouter, } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { signUpValidation, validateFunc } from "@/BackendLib/Middleware/Validation";

const router = createRouter<NextApiRequest, NextApiResponse>();
const prisma = new PrismaClient();
type resType = Omit<signupBodyTypes, "password">;

//// signup auth controller
export const POST =  initValidation(signUpValidation, AuthMiddleware(async (req: NextRequest, res: NextResponse) => {
  
  if (req.method !== "POST")
    return ErrorMessage("POST method not supported", 405);

  const userdata: signupBodyTypes = await req.json();
  checkFormDataError(req);

  const data = await prisma.user.findUnique({
    where: {
      email: userdata.email,
    },
  });

  if (data?.email) return ErrorMessage("User already exists!", 409);

  const salting = 10;
  const bcryptPassword = await bcrypt.hash(userdata.password, salting);

  const getData = await prisma.user.create({
    data: {
      name: userdata.name,
      email: userdata.email,
      password: bcryptPassword,
    },
    select: {
      name: true,
      email: true,
      password: false,
    },
  });

  sendEmailOfPincode(getData?.email);
  const resData: resType = getData;
  return SuccessMessage<resType>("User created successfully!", 201, resData);
}));

