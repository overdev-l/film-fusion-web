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
    app.use(
        "/trpc",
        createExpressMiddleware({ router })
    )
    if (args.env === "development") {
        app.use(Cors({ origin: `http://localhost:3000` }))
    }
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
