import { useEffect } from "react"
import { sayHello } from "./apis"

export default function () {

    const main = async () => {
        const result = await sayHello()
        console.log(result)
    }
    useEffect(() => {
        main()
    })
    return <>123</>
}