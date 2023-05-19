declare namespace NodeJS {
    interface ProcessEnv {
        [key: string]: any
        PORT: number
        NODE_ENV: string
        whiteList: Array<string>
    }
}