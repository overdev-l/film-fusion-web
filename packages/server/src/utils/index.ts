import { lightRed, lightGreen, inverse } from "kolorist"
import Cors from "cors"
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

export const useDevelopment = () => process.env.NODE_ENV === "development"
export const useProduction = () => process.env.NODE_ENV === "production"

/**
 * cors
 * @returns 
 */
export const useCors = () => Cors({
    origin: function (origin, callback) {
        if (!origin) {
            callback(null, false)
        }
        if (process.env.whiteList.indexOf(origin as string) !== -1) {
            callback(null, true)
        }
    }
})

