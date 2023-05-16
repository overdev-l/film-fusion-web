import path from "path"

import express, { Express } from "express"
import minimist from "minimist"
import * as dotenv from "dotenv"


const args = minimist(process.argv.slice(2))
function main() {
    useConfig()
    const app: Express = express()
    app.listen(process.env.PORT, () => {
        console.log('server starting')
    })
}

export const useConfig = () => {
    return dotenv.config({
        path: path.resolve(__dirname, `./.${args.env}.env`)
    })
}

main()
