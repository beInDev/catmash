export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      MONGO_AUTH_SOURCE: string;
      MONGO_PASSWORD: string;
      MONGO_USER: string;
      MONGO_DB: string;
    }
  }
}
