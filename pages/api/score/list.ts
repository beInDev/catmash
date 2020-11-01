import * as Cat from 'data/models/cat';
import { NextApiRequest, NextApiResponse } from 'next';
import { createHandler } from 'utils/handlers.utils';

export default createHandler(
  ['GET'],
  async (req: NextApiRequest, res: NextApiResponse) => {
    const cats = await Cat.getModel().find();

    res.status(200).send(cats);
  }
);
