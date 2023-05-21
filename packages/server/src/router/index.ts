import { router} from "../trpc"
import * as routers from "./modules"
const appRouter = router({
    ...routers
})

export default appRouter
