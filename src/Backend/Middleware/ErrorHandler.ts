import {
  ContextRunner,
  ValidationChain,
  validationResult,
} from 'express-validator';
import { NextRequest, NextResponse } from 'next/server';

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
    return Promise.resolve(fn(req, res)).catch((error) =>
      ErrorMessage(error.message)
    );
  };

export const initValidation = (
  validations: ContextRunner[],
  handler: (req: NextRequest, res: NextResponse<unknown>) => Promise<any>
) => {
  return async (req: NextRequest, res: NextResponse) => {
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      try {
        for (const validation of validations) {
          await validation.run(req);
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return NextResponse.json({
            message: errors.array()?.[0].msg,
            success: false,
          });
        }
      } catch (err) {
        const error = err as Error;
        //eslint-disable-next-line
        console.log(error.message || 'Error occured while validating');
      }
    }
    return await handler(req, res);
  };
};
