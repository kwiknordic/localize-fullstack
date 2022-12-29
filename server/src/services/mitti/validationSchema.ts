import { z } from "zod"

export const validationSchema = z.object({
  from: z.coerce.number(),
  to: z.coerce.number()
}).partial()

export type Params = z.infer<typeof validationSchema>