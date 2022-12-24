import React, { useCallback, useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import Swal from 'sweetalert2';
import { pokeImgs, pokeBallImg } from './assets';
import { shuffle } from '@/libraries/utils';

const pokeImgLength = Object.keys(pokeImgs).length;
const cardLength = 6;
const getSeedCards = () =>
  shuffle(
    new Array(pokeImgLength).fill(null).map((_, i) => ({
      imgId: i + 1,
      isVisible: false,
    }))
  ).filter((_, i) => i < cardLength);

const getInitCards = () => {
  const seedCards = getSeedCards();
  return shuffle([...seedCards, ...seedCards]).map((item, index) => ({
    ...item,
    index,
  }));
};

const MatchingGame = () => {
  const checkCardTimerId = useRef(null);
  const restartCardTimerId = useRef(null);
  const [cards, setCards] = useState(() => getInitCards());
  const [cardsToCheck, setCardsToCheck] = useState([]);
  const [score, setScore] = useState(0);

  const onCardClick = useCallback(
    ({ imgId, isVisible, index }) => {
      if (!isVisible && cardsToCheck.length <= 2) {
        setCards((preState) =>
          preState.map((config) =>
            config.index === index
              ? { ...config, isVisible: !config.isVisible }
              : config
          )
        );
        checkCardTimerId.current = setTimeout(() => {
          setCardsToCheck((preState) => [...preState, { imgId, index }]);
        }, 1000);
      }
    },
    [cardsToCheck.length]
  );

  const onRestartClick = useCallback(() => {
    setScore(0);
    setCards((preState) =>
      preState.map((item) => ({ ...item, isVisible: false }))
    );
    restartCardTimerId.current = setTimeout(() => {
      setCards(getInitCards());
    }, 300);
  }, []);

  useEffect(() => {
    if (cardsToCheck.length === 2) {
      const [firstCard, secondCard] = cardsToCheck;
      const isMatch = firstCard.imgId === secondCard.imgId;
      if (isMatch) {
        setScore((preState) => {
          const newScore = preState + 1;
          if (newScore === cardLength) {
            Swal.fire({
              icon: 'success',
              title: 'You Win!!',
              text: 'Press Restart To Play Again',
            });
          }
          return newScore;
        });
      }
      setCards((preState) =>
        preState.map((item) =>
          [firstCard.index, secondCard.index].includes(item.index)
            ? {
                ...item,
                isVisible: isMatch,
              }
            : item
        )
      );
      setCardsToCheck([]);
    }
  }, [cardsToCheck]);

  useEffect(() => {
    return () => {
      clearTimeout(checkCardTimerId.current);
      clearTimeout(restartCardTimerId.current);
    };
  }, []);

  return (
    <div className='matching-game'>
      <div className='actions'>
        <div className='score'>Score {score}</div>
        <button className='ui primary button' onClick={onRestartClick}>
          Restart
        </button>
      </div>
      <div className='cards'>
        {cards.map(({ imgId, isVisible, index }) => (
          <div
            key={`card-${index}`}
            className={clsx('card', { disabled: isVisible })}
          >
            <div
              className={clsx('box', { visible: isVisible })}
              onClick={() => {
                onCardClick({ imgId, isVisible, index });
              }}
            >
              <div className='front'>
                <img src={pokeBallImg} alt='poke-ball' />
              </div>
              <div className='back'>
                <img src={pokeImgs[imgId]} alt='poke-img' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingGame;
