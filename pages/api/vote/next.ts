import { NextApiRequest, NextApiResponse } from "next";
import { createHandler } from "utils/handlers.utils";
import logger from "utils/logger.utils";

export default createHandler(
  ["GET"],
  (req: NextApiRequest, res: NextApiResponse) => {
    logger.info("test");
    res.status(200).send("OK");
  }
);
