import dotenv from "dotenv";
dotenv.config({
  path: `server/.${process.env.NODE_ENV}`,
});
