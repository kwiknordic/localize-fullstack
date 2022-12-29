const { env } = process

const variables = {
  API_KEY: env.API_KEY,
  PORT: env.PORT,
  ENVIRONMENT: env.NODE_ENV
} as { [key: string]: string | undefined}

for (let env in variables) {
  if (!variables[env]) throw ReferenceError(`${env} is not added`)
}

export const API_KEY: string = String(env.API_KEY)
export const PORT: number = Number(env.PORT)
export const NODE_ENV: string = String(env.NODE_ENV)