import { trpc } from "../../utils/request"

export const example = async () => await trpc.example.hello.query()
export const analysisText = async (text: string) => await trpc.analysis.analysisText.mutate(text)