import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from "@/BackendLib/Middleware/ErrorHandler";
import { getAddPasswordSchema } from "@/BackendLib/Middleware/Validation";
import { accessToken, prisma } from "@/BackendLib/lib/helper";
import { AddPasswordDataTypes } from "@/BackendLib/lib/types";
import { getCookies, verifyToken } from "@/BackendLib/lib/utils";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    if (req.method !== "POST")
      return ErrorMessage("POST method only supported!", 400);
    const body: AddPasswordDataTypes = await req.formData();
    const validationResult = await getAddPasswordSchema().safeParseAsync(body);
    if (!validationResult.success)
      return ErrorMessage(
        JSON.parse(validationResult.error.message)?.[0].message
      );
    const token = getCookies(req);
    if (!token) return ErrorMessage("token not Found!", 403);
    console.log(body);
    const { _id: user } = verifyToken(token);
    //CHECK THE USER AND ADD THE PASSWORD
    const doesPasswordsAdded = await prisma.addPassword.findFirst({
      where: {
        User: {
          id: user,
        },
      },
    });

    console.log(doesPasswordsAdded);

    const addpassword = await prisma.addPassword.create({
      data: {
        password: body.password,
        catagory: body.catagory,
        description: body.description,
        image: "",
        name: body.name,
        url: body.url,
        notes: body.note,
        userId: user,
      },
    });
    return SuccessMessage(
      "Password is created successfully.",
      201,
      addpassword
    );
  }
);
