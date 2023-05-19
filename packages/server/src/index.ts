import path from "path"

import express, { Express } from "express"
import { createExpressMiddleware } from "@trpc/server/adapters/express"
import minimist from "minimist"
import * as dotenv from "dotenv"

import router from "./router"
import { useCors, useDevelopment } from "./utils"

const args = minimist(process.argv.slice(2))

function main() {
    useConfig()
    const app: Express = express()
    if (useDevelopment()) {
        app.use(useCors())
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
