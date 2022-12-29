import { z } from "zod"

export const validationSchema = z.object({
  long: z.coerce.number(),
  lat: z.coerce.number()
}).partial()

export type Params = z.infer<typeof validationSchema>