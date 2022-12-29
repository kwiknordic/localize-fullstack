import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from "http-status-codes"
type ReturnFunction = (req: Request, res: Response, next: NextFunction) => void

export const sendPosts = (serviceRequest: Function): ReturnFunction => {
  return async function(_, res, next) {
    try {
      console.log("Inside sendPosts")
      const data = await serviceRequest(res.locals.params)
      res.status(StatusCodes.ACCEPTED).json(data)
    } catch (error) {
      next(error)
    }
  }
}