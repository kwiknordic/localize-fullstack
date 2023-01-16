// false if you want to connect to your local server-side env.
export const PROD = false

export function getConnectionConfig() {
  if (!PROD) return {
    url: connectionConfig.local.host,
    port: connectionConfig.local.port,
  }
  
  return {
    url: connectionConfig.prod.host
  }
}

const connectionConfig = {
  local: {
    host: "http://localhost",
    port: 5001,
  },
  prod: {
    host: "https://localize-production.up.railway.app"
  }
}