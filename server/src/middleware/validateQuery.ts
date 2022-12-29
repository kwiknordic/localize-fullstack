import {Request, Response, NextFunction} from 'express';
type ReturnFunction = (req: Request, res: Response, next: NextFunction) => void

export const validateQuery = (validationSchema: Zod.SomeZodObject): ReturnFunction => {
  return function(req, res, next) {
    const validated = validationSchema.safeParse(req.query)
    if (validated.success) res.locals.params = validated.data
    next()
  }
}