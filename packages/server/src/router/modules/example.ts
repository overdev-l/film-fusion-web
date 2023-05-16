import { publicProcedure } from "../../trpc"
import { z } from "zod"
export const hello = publicProcedure.
    input(z.object({
        name: z.string()
    }))
    .query(opts => {
        const { name } = opts.input
        console.log(name)
        return {
            name
        }
    })