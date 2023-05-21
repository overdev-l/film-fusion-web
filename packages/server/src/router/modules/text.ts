import * as spacy from "spacy-js"
import { z } from "zod"
import { router, publicProcedure } from "../../trpc"

export const analysis = router({
    analysisText: publicProcedure
    .input(z.string())
    .mutation(async opt => {
        const nlp = await spacy.load("en_core_web_sm")
        const doc = await nlp(opt.input)
        return doc
    })
})