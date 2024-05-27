import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from "@/BackendLib/Middleware/ErrorHandler";
import { getAddPasswordSchema } from "@/BackendLib/Middleware/Validation";
import { upload } from "@/BackendLib/Middleware/multer";
import {
  GetFormData,
  HandleMulterMiddleware,
  accessToken,
  prisma,
} from "@/BackendLib/lib/helper";
import { AddPasswordDataTypes } from "@/BackendLib/lib/types";
import { getCookies, verifyToken } from "@/BackendLib/lib/utils";
import { PageConfig } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'

type PasswordData = {
  catagory:string,
  name:string,
  password:string,
  url:string,
  notes:string,
  image:string,
  description:string,
}

// const multerMiddleware = upload.single("image");

export const POST = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    if (req.method !== "POST")
      return ErrorMessage("POST method only supported!", 400);
    const form_data = await req.formData();
    const formdata = Object.fromEntries(form_data);
    console.log(formdata);
    const password_data = formdata as PasswordData;
    // const image = form_data.get('image');
    // if(!image) return;
    // const byteimage = fs.readFileSync(image);
    // const buffer = Buffer.from(byteimage);
    // console.log(buffer);
    // const data = GetFormData<AddPasswordDataTypes>(form_data, PasswordData);
    // const data = JSON.parse(formdata);
    // console.log(formdata);
    // await HandleMulterMiddleware(req, res, multerMiddleware);
    // const validationResult = await getAddPasswordSchema().safeParseAsync(data);
    // if (!validationResult.success)
    //   return ErrorMessage(
    //     JSON.parse(validationResult.error.message)?.[0].message
    //   );
    // const token = getCookies(req);
    // if (!token) return ErrorMessage("token not Found!", 403);
    // console.log(data);
    // const { _id: user } = verifyToken(token);
    // //CHECK THE USER AND ADD THE PASSWORD
    // const doesPasswordsAdded = await prisma.addPassword.findFirst({
    //   where: {
    //     User: {
    //       id: user,
    //     },
    //   },
    // });

    // console.log(doesPasswordsAdded);

    // const addpassword = await prisma.addPassword.create({
    //   data: {
    //     password: data.password,
    //     catagory: data.catagory,
    //     description: data.description,
    //     image: "",
    //     name: data.name,
    //     url: data.url,
    //     notes: data.note,
    //     userId: user,
    //   },
    // });
    return SuccessMessage(
      "Password is created successfully.",
      201
      // addpassword
    );
  }
);

// export const config: PageConfig = {
//   api: {
//     bodyParser: false,
//   },
// };
