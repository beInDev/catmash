import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export type HandlerMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

export type HttpError = Error & { statusCode: number };

export function createHandler(
  methods: HandlerMethod[],
  handler: NextApiHandler
): NextApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (!methods.includes(req.method as HandlerMethod)) {
        res.status(405).send("405 - Method not allowed");
        return;
      }

      return handler(req, res);
    } catch (error) {
      // logger.error(error)
      if (error.statusCode) {
        res.status(error.statusCode).send(error.message);
        return;
      }

      res.status(500).end();
      return;
    }
  };
}
