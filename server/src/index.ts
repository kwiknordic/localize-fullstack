import "dotenv/config"
import cors from "cors"
import compression from "compression"
import express from "express"
import helmet from "helmet"
import router from "./routes/router.js"
import { errorHandler } from "./middleware/error/errorHandler.js"
import { startServer } from "./utils/startServer.js"

export function createApp() {
  const app = express()
  app.use(helmet())
  app.use(cors())
  app.use(compression())
  app.use(router)
  app.use(errorHandler)
  return app
}

startServer()