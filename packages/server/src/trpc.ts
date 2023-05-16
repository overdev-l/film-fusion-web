import { initTRPC } from "@trpc/server"
import * as trpcExpress from "@trpc/server/adapters/express"


export const t = initTRPC.create()
export const router = t.router
export const middleware = t.middleware
export const publicProcedure = t.procedure
export const createContext = ({
    req,
    res,
  }: trpcExpress.CreateExpressContextOptions) => {
    return {
      req,
      res,
    }
  }