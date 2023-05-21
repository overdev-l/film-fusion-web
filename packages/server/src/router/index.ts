import { publicProcedure, router} from "../trpc"
import * as routers from "./modules"
console.log(routers, "routers")
const appRouter = router({
    sayHello: publicProcedure.query(() => {
        return "Hello World"
    }),
    ...routers
})

export default appRouter
