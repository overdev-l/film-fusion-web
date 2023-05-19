declare namespace NodeJS {
    interface ProcessEnv {
      [key: string]: any;
      whiteList: Array<string>
    }
  }