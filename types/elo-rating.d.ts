declare module 'elo-rating' {
  export function calculate(
    playerScore: number,
    opponentScore: number,
    playerWin: boolean = true
  ): {
    playerRating: number;
    opponentRating: number;
  };
}
