import { z } from 'zod'

export const AddNotesValidation = z.object({
  title: z
    .string()
    .nonempty({ message: 'Enter note name' })
    .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  description: z
    .string()
    .nonempty({ message: 'Enter note description' })
    .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  priority: z
    .string()
    .nonempty({ message: 'Select Priority' })
    .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
})

export type NotesValidationTypes = z.infer<typeof AddNotesValidation> 
