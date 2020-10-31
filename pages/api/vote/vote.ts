import { NextApiRequest, NextApiResponse } from "next";
import { createHandler } from "utils/handlers.utils";

export default createHandler(
  ["POST"],
  (req: NextApiRequest, res: NextApiResponse) => {}
);
