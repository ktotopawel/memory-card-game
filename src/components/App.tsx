import { useEffect, useState } from "react";
import type { TarotCard } from "../types";
import Game from "./Game";

export default function App() {
  const [cardList, setCardList] = useState<TarotCard[]>([]);
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);
  function getNewCards(amount: number) {
    if (amount > 78) throw new Error("amount too large");
    fetch(`https://tarotapi.dev/api/v1/cards/random?n=${amount}`)
      .then((response) => response.json())
      .then((response) => {
        const newCardList = response.cards.map((card: TarotCard) => {
          card.isGuessed = false;
          return card;
        });
        setCardList(newCardList);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getNewCards(10);
  }, []);

  return (
    <>
      {cardList.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{score}</h1>
          <Game
            cardList={cardList}
            score={score}
            setScore={setScore}
            hiScore={hiScore}
            setHiScore={setHiScore}
          ></Game>
        </>
      )}
    </>
  );
}
