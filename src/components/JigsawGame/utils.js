import { shuffle } from '@/libraries/utils';

export const pieces = Array(4).fill(null);

export const getRandomOriginPiece = () =>
  shuffle(pieces.map((_, i) => i + 1)).reduce(
    (acc, pieceIndex, boxIndex) => ({ ...acc, [boxIndex]: pieceIndex }),
    {}
  );
