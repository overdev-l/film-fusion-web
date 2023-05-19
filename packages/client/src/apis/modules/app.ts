import { trpc } from "../../utils/request"

export const sayHello = async () => await trpc.sayHello.query()