import { lightRed, lightGreen, inverse } from "kolorist"

import { UseLogger } from "./utils.dto"

export const useLogger: UseLogger = () => {
    return {
        info: <T>(message: string, data?: T) => {
            console.log(inverse(message))
            if (data) {
                console.log(data)
            }
        },
        error: (message: string) => {
            console.log(lightRed(message))
        },
        success: (message: string) => {
            console.log(lightGreen(message))
        }
    }
}