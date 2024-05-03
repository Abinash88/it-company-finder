import { NextRequest } from "next/server";
import { signUpValidation } from "./BackendLib/Middleware/Validation";

export default function middleware(req:NextRequest) {
    signUpValidation
}
