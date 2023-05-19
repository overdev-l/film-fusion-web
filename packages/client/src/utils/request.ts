import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import { appRouter } from "@server"

export const trpc = createTRPCProxyClient<appRouter>({
    links: [
        httpBatchLink({
            url: "http://localhost:8080/trpc"
        })
    ]
})