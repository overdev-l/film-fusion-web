import path from "path"

import express, { Express } from "express"
import Cors from "cors"
import { createExpressMiddleware } from "@trpc/server/adapters/express"
import minimist from "minimist"
import * as dotenv from "dotenv"

import router from "./router"

const args = minimist(process.argv.slice(2))

function main() {
    useConfig()
    const app: Express = express()
    if (args.env === "development") {
        console.log(process.env.whiteList)
        app.use(Cors({
            origin: function (origin, callback) {
                if (!origin) {
                    callback(null, false)
                }
                if (process.env.whiteList.indexOf(origin as string) !== -1) {
                    callback(null, true)
                }
            }
        }))
    }
    app.use(
        "/trpc",
        createExpressMiddleware({ router })
    )
    
    app.listen(process.env.PORT, () => {
        console.log('server starting')
    })
}

export const useConfig = () => {
    return dotenv.config({
        path: path.resolve(__dirname, `../.${args.env}.env`)
    })
}

try {
    main()
} catch (error) {
    console.log(error)
}

export type appRouter = typeof router
