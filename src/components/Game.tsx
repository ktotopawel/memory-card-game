import { useState } from "react";
import type { SetState, TarotCard } from "../types";
import Card from "./Card";

type CardDisplayProps = {
  cardList: TarotCard[];
  score: number;
  setScore: SetState<number>;
  hiScore: number;
  setHiScore: SetState<number>;
};

export default function Game({
  cardList,
  score,
  setScore,
  hiScore,
  setHiScore,
}: CardDisplayProps) {
  function getRandomCardIndex() {
    return Math.floor(Math.random() * cardList.length);
  }

  const [currentCardIndex, setCurrentCardIndex] = useState(
    getRandomCardIndex()
  );

  function playRound(pChoice: boolean) {
    if (cardList[currentCardIndex].isGuessed === pChoice) {
      nextRound();
      updateScore();
    } else {
      gameOver();
    }
  }

  function nextRound() {
    do {
      setCurrentCardIndex(getRandomCardIndex());
    } while (cardList[currentCardIndex].isGuessed);
  }

  function gameOver() {
    updateScore(0);
  }

  function updateScore(newScore: number = score + 1) {
    setScore(newScore);
    setHiScore(hiScore < newScore ? newScore : hiScore);
  }
  return (
    <>
      <h1>{currentCardIndex}</h1>
      <Card
        card={cardList[currentCardIndex]}
        key={cardList[currentCardIndex].name_short}
      ></Card>
      <button onClick={() => playRound(true)}>Seen</button>
      <button onClick={() => playRound(false)}>Not Seen</button>
    </>
  );
}
