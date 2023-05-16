export type Logger = <T>(message: string, data?: T) => void
export type UseLogger = () => {
    info: Logger
    error: Logger
}
