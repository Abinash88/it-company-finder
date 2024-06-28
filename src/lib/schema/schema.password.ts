import { z } from 'zod'

export const AddPasswordValidation = z.object({
  category: z.string().nonempty({ message: 'Choose One Category' }),
  password_name: z
    .string()
    .nonempty({ message: 'Enter a password name' })
    .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  password: z
    .string()
    .nonempty({ message: 'Enter Password' })
    .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  url: z
    .string()
    .nonempty({ message: 'Enter URL' })
    .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  description: z.string().refine((arg) => !/[!@$&<>()]/.test(arg)),
})

export type PasswordValidationTypes = z.infer<typeof AddPasswordValidation>
