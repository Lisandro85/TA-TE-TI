import { comboWinners } from "../constants/constants";
export const checkWinner = (boardToCheck) => {
  for (const combo of comboWinners) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};
