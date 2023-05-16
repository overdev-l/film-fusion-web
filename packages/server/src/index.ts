import path from "path"

import express, { Express } from "express"
import * as trpcExpress from "@trpc/server/adapters/express"
import minimist from "minimist"
import * as dotenv from "dotenv"

import router from "./router"

const args = minimist(process.argv.slice(2))
function main() {
    useConfig()
    const app: Express = express()
    app.use(
        "trpc",
        trpcExpress.createExpressMiddleware({
            router
        })
    )
    app.listen(process.env.PORT, () => {
        console.log('server starting')
    })
}

export const useConfig = () => {
    return dotenv.config({
        path: path.resolve(__dirname, `./.${args.env}.env`)
    })
}

try {
    main()
} catch (error) {
    console.log(error)
}
