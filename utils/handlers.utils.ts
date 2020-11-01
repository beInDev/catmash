import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import logger from 'utils/logger.utils';

export type HandlerMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

/**
 * Wraps the specified function in a generic function for factoring api requesting handlers
 *
 * @export
 * @param {HandlerMethod[]} methods The methods the route accepts
 * @param {NextApiHandler} handler The handler that should execute the request
 * @returns {NextApiHandler}
 */
export function createHandler(
  methods: HandlerMethod[],
  handler: NextApiHandler
): NextApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (!methods.includes(req.method as HandlerMethod)) {
        res.status(405).send('405 - Method not allowed');
        return;
      }

      await handler(req, res);
    } catch (error) {
      logger.error(error);
      if (error.statusCode) {
        res.status(error.statusCode).send(error.message);
        return;
      }

      res.status(500).end();
      return;
    }
  };
}
