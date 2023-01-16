import { Request, Response, NextFunction } from "express";
import { notFoundError } from "./errors.js";
import {
	ReasonPhrases,
	StatusCodes,
} from 'http-status-codes';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): unknown => {
  console.log("ErrorHandler: ", err)

  if (err.message.includes("401")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(ReasonPhrases.UNAUTHORIZED)
  }

  if (err instanceof SyntaxError) {
    return res
      .status(StatusCodes.SERVICE_UNAVAILABLE)
      .json(ReasonPhrases.SERVICE_UNAVAILABLE)
  }

  if (err instanceof TypeError) {
    return res
      .status(StatusCodes.SERVICE_UNAVAILABLE)
      .json(ReasonPhrases.SERVICE_UNAVAILABLE)
  }

  if (err instanceof notFoundError) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json(ReasonPhrases.NOT_FOUND);
  }

  next()
  return
}