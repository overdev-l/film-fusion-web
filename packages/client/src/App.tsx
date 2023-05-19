import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import { useEffect, useRef } from "react"

import { appRouter } from "@server"

export default function () {
    const client = useRef(createTRPCProxyClient<appRouter>({
        links: [
            httpBatchLink({
                url: "http://localhost:8080/trpc"
            })
        ]
    }))
    const main = async () => {
        const result = await client.current.sayHello.query()
        console.log(result)
    }
    useEffect(() => {
        main()
    })
    return <>123</>
}