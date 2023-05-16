import path from "path"

import express, { Express } from "express"
import minimist from "minimist"
import * as dotenv from "dotenv"


const args = minimist(process.argv.slice(2))
function main() {
    useConfig()
    console.log(process.env.PORT)
    const app: Express = express()
    const port = 8000
    app.listen(port, () => {
        console.log('server starting')
    })
}

export const useConfig = () => {
    return dotenv.config({
        path: path.resolve(__dirname, `./.${args.env}.env`)
    })
}

main()
