import { z } from "zod"


    export const AddTaskValidation = z.object({
      task_name: z
        .string()
        // .nonempty({ message: 'Enter a Task name' })
        .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
      description: z
        .string()
        .nonempty({ message: 'Enter description' })
        .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
      priority: z
        .string()
        .nonempty({ message: 'Selected Priority' })
        .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
    });

  
  
  export type TaskValidationTypes = z.infer<typeof AddTaskValidation> 
  