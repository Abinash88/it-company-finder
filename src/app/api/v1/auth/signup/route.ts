import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from '@/Backend/Middleware/ErrorHandler'
import { getSignupSchema } from '@/Backend/Middleware/Validation'
import { NODEMAILER_EMAIL, WEB_URL } from '@/Backend/config'
import { signupBodyTypes } from '@/Backend/lib/backendTypes'
import { CreateToken, transporter } from '@/Backend/lib/utils'
import { SignupServices } from '@/Backend/services/signup-services'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()
export type resType = {
  name: string | null
  id: string
  email: string
}

//// signup auth controller
export const POST = AuthMiddleware(
  async (req: NextRequest, res: NextResponse) => {
    if (req.method !== 'POST')
      return ErrorMessage('POST method not supported', 405)
    const userdata: signupBodyTypes = await req.json()
    // const results = await getSignupSchema()?.safeParseAsync(userdata)
    // if (!results.success)
    //   return ErrorMessage(JSON.parse(results.error.message)[0]?.message)
    // const getData = await SignupServices({ userdata })
    const user = await prisma.user.findUnique({
      where: {
        email: userdata.email,
      },
    })

    if (user?.email) return ErrorMessage('User already exists!', 409)

    const salting = 10
    const bcryptPassword = await bcrypt.hash(userdata.password, salting)

    // const getData = await prisma.user.create({
    //   data: {
    //     name: userdata.name,
    //     email: userdata.email,
    //     password: bcryptPassword,
    //   },
    //   select: {
    //     id: true,
    //     name: true,
    //     email: true,
    //     password: false,
    //   },
    // })

    // const token = CreateToken(getData.id, '10m')

    transporter.sendMail({
      from: NODEMAILER_EMAIL,
      to: userdata?.email,
      subject: 'Email Verification',
      text: `Your otp verification code: ${WEB_URL}verify-email?token=${'token'}`,
    })

    return SuccessMessage<resType>(
      `User created. Verify Email from you inbox ${userdata?.email}`,
      201,
      // getData
    )
  }
)
