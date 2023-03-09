import React, { useCallback, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Swal from 'sweetalert2';

const initBoard = Array(9).fill(null);
const winnnerLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToeGame = () => {
  const [gameHistory, setGameHistory] = useState([initBoard]);
  const [step, setStep] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const currentBoard = useMemo(() => gameHistory[step], [gameHistory, step]);
  const cellLabel = useMemo(() => (step % 2 === 0 ? 'O' : 'X'), [step]);

  const onCellClick = useCallback(
    (i) => {
      setGameHistory((preState) => {
        const currentSteps = preState.filter((_, i) => i <= step);
        const preStep = currentSteps[currentSteps.length - 1];
        const newBoard = preStep.map((item, targetIndex) =>
          i === targetIndex ? cellLabel : item
        );
        return [...currentSteps, newBoard];
      });
      setStep((preState) => preState + 1);
    },
    [cellLabel, step]
  );

  useEffect(() => {
    // check winner
    let winnerStr = '';
    const isWinnerExisted = winnnerLines.some((line) => {
      winnerStr = line.map((index) => currentBoard[index]).join('');
      const result = ['OOO', 'XXX'].includes(winnerStr);
      return result;
    });

    if (isWinnerExisted) {
      Swal.fire({
        icon: 'success',
        title: `${winnerStr.charAt(0)} is winner!`,
        text: 'Press Restart To Play Again',
      });
      setIsGameOver(true);
    }
  }, [currentBoard]);

  const resetGame = useCallback(() => {
    setGameHistory([initBoard]);
    setStep(0);
    setIsGameOver(false);
  }, []);

  return (
    <div className='tic-tac-toe-game'>
      <button className='ui button reset' onClick={resetGame}>
        restart
      </button>
      <div className='board'>
        {currentBoard.map((label, i) => (
          <div
            key={`cell-${i}`}
            className={clsx('cell', { disabled: !!label || isGameOver })}
            onClick={() => {
              !label && !isGameOver && onCellClick(i);
            }}
          >
            {label}
          </div>
        ))}
      </div>
      {!isGameOver && (
        <div className='steps'>
          {gameHistory.map((_, i) => (
            <button
              className={clsx('ui button', {
                primary: step !== i,
                green: step === i,
              })}
              onClick={() => {
                setStep(i);
              }}
            >
              {i !== 0 ? `# ${i + 1}` : 'Init'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TicTacToeGame;
