import { validationResult } from "express-validator";
import { ErrorMessage } from "./ErrorHandler";

export const checkFormDataError = (req: Request) => {
  const result = validationResult(req);
  if (!result.isEmpty()) return ErrorMessage(result.array()[0].msg, 400);
};
