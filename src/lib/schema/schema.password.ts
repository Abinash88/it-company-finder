import { z } from 'zod';
import { ImageValidator } from './validators';

export const AddPasswordValidation = z.object({
  category: z.string().min(1, { message: 'Choose One Category' }),
  password_name: z
    .string()
    .min(1, { message: 'Enter a password name' })
    .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  password: z
    .string()
    .min(1, { message: 'Enter Password' })
    .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  url: z
    .string()
    .min(1, { message: 'Enter URL' })
    .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  description: z.string().refine((arg) => !/[!@$&<>()]/.test(arg)),
  siteImage: ImageValidator(2, true),
});

export type PasswordValidationTypes = z.infer<typeof AddPasswordValidation>;
