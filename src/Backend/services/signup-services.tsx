import { resType } from "@/app/api/v1/auth/signup/route"
import { ErrorMessage } from "../Middleware/ErrorHandler"
import { signupBodyTypes } from "../lib/backendTypes"
import { prisma } from "../lib/helper"
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server"


export const SignupServices = async ({ userdata }: { userdata: signupBodyTypes }): Promise<resType | NextResponse<{
    success: boolean;
    message: string;
}>> => {

    const user = await prisma.user.findUnique({
        where: {
            email: userdata.email,
        },
    })

    if (user?.email) return ErrorMessage('User already exists!', 409)

    const salting = 10
    const bcryptPassword = await bcrypt.hash(userdata.password, salting)

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
    })

    return getData;
}