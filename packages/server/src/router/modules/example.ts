import { publicProcedure, router } from "../../trpc"

export const example = router({
    hello: publicProcedure.query(() => {
        return "Hello World"
    })
})