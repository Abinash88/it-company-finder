import { z } from 'zod'

export const SCHEMA_VALIDATION = {
    signup_schema: z.object({
        name: z.string().nonempty({ message: 'Cannot leave the empty field!' }).refine(data => !/[*<>?!#$%^&()|/]/.test(data)),
        email: z.string().nonempty({ message: 'Cannot leave the empty field!' }).email().refine(data => !/[*<>?!#$%^&()|/]/.test(data)),
        password: z.string().nonempty({ message: 'Cannot leave the empty field!' }).refine(data => !/[*<>?!$%^&()|/]/.test(data))
    }),
    login_schema: z.object({
        email: z.string().nonempty({ message: 'Cannot leave the empty field!' }).email().refine(data => !/[*<>?!#$%^&()|/]/.test(data)),
        password: z.string().nonempty({ message: 'Cannot leave the empty field!' }).refine(data => !/[*<>?!$%^&()|/]/.test(data))
    }),
}