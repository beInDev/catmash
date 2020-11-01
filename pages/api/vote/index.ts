import * as Cat from 'data/models/cat';
import { NextApiRequest, NextApiResponse } from 'next';
import { createHandler } from 'utils/handlers.utils';
import { createError } from 'utils/http.utils';
import elo from 'elo-rating';

/**
 * Update the cats' scores with the corresponding value calculated from the match.
 *
 * The score is calculated using the ELO system https://en.wikipedia.org/wiki/Elo_rating_system
 *
 * @param {string} id
 * @param {boolean} winner
 * @returns {Promise<void>}
 */
async function updateScore(winnerId: string, loserId: string): Promise<void> {
  const winner = await Cat.getModel().findOne({
    id: winnerId,
  });
  const loser = await Cat.getModel().findOne({
    id: loserId,
  });

  const { playerRating, opponentRating } = elo.calculate(
    winner.score,
    loser.score
  );

  await winner.updateOne({
    score: playerRating,
    matchesWon: winner.matchesWon + 1,
  });

  await loser.updateOne({
    score: opponentRating,
    matchesLost: loser.matchesLost + 1,
  });
}

/**
 * Endpoint to register the results of the match vote
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default createHandler(
  ['POST'],
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { winnerId, loserId } = req.body;
    if (!winnerId || !loserId) {
      throw createError(400, 'Missing winnerId or loserId');
    }

    await updateScore(winnerId, loserId);
    res.status(200).send('OK');
    return;
  }
);
