import { z } from "zod"
import { router, publicProcedure } from "../../trpc"

export const analysis = router({
    analysisText: publicProcedure
    .input(z.string())
    .mutation(async opt => {
        return opt.input
    })
})