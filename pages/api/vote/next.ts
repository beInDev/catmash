import { NextApiRequest, NextApiResponse } from 'next';
import { createHandler } from 'utils/handlers.utils';
import * as Cat from 'data/models/cat';

/**
 * Endpoint to retrieve the next contestants after a match or at first user arrival.
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default createHandler(
  ['GET'],
  async (req: NextApiRequest, res: NextApiResponse) => {
    const cats = await Cat.getModel().aggregate([{ $sample: { size: 2 } }]);

    // TODO: find a better way than randomly sampling the collection
    res.status(200).send(cats.map(({ id, url }) => ({ id, url })));
    return;
  }
);
