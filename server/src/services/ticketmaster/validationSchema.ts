import { z } from "zod"

export const validationSchema = z.object({
  city: z.string(),
  countryCode: z.string(),
  sort: z.string(),
  size: z.string(),
  page: z.string()
}).partial()

export type Params = z.infer<typeof validationSchema>