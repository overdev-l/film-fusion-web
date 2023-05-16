import express from "express"

function main() {
    const app = express()
    const port = 8000
    app.listen(port, () => {
        console.log('server starting')
    })
}

main()
