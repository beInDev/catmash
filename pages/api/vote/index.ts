import * as Cat from "data/models/cat";
import { NextApiRequest, NextApiResponse } from "next";
import { createHandler } from "utils/handlers.utils";
import { createError } from "utils/http.utils";

/**
 * Update the cat's score with the corresponding value from the match
 *
 * @param {string} id
 * @param {boolean} winner
 * @returns {Promise<void>}
 */
async function updateScore(id: string, winner: boolean): Promise<void> {
  const cat = await Cat.getModel().findOne({
    id,
  });

  await cat.update({
    score: cat.score + (winner ? 1 : -1),
    matches: cat.matches + 1,
  });
}

/**
 * Endpoint to register the results of the match vote
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default createHandler(
  ["POST"],
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { winnerId, loserId } = req.body;
    if (!winnerId || !loserId) {
      throw createError(400, "Missing winnerId or loserId");
    }

    await updateScore(winnerId, true);
    await updateScore(loserId, false);
    res.status(200).send("OK");
    return;
  }
);
