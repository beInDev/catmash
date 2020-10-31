import mongoose from "mongoose";

export default async function getDatabase() {
  if (!mongoose.connection.readyState) {
    mongoose.Promise = Promise;
    return mongoose.connect(process.env.MONGO_URI, {
      authSource: process.env.MONGO_AUTH_SOURCE,
      auth: {
        password: process.env.MONGO_PASSWORD,
        user: process.env.MONGO_USER,
      },
      dbName: process.env.MONGO_DB,
    });
  }
  return mongoose;
}
