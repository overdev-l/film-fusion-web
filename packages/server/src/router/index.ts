import { publicProcedure, router} from "../trpc"
import * as routers from "./modules"

const appRouter = router({
    sayHello: publicProcedure.query(() => {
        return "Hello World"
    }),
    ...routers
})

export default appRouter
