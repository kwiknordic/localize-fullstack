import { createApp } from "../index.js"
import { NODE_ENV, PORT } from "../consts.js"

export function startServer() {
  return createApp().listen(PORT, () => {
    const startMessage = `Example app listening on port ${PORT}`
    const devMode = `--------- WARNING: ExpressJS in developer mode ---------`

    NODE_ENV === "development"
      ? console.log(`${devMode}\n${startMessage}`)
      : console.log(`${startMessage}`)
  })
}