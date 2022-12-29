import {
	ReasonPhrases,
	StatusCodes,
} from 'http-status-codes';

export class notFoundError extends Error {
  statusCode: number;
  
  constructor(message?: string, statusCode?: number) {
    super()
    this.message = message ?? ReasonPhrases.NOT_FOUND
    this.statusCode = statusCode ?? StatusCodes.NOT_FOUND
  }
}