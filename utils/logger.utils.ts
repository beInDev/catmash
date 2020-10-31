import pino from "pino";

// Default global logger
export default pino({
  name: "catmash",
  prettyPrint: process.env.NODE_ENV === "development",
});
