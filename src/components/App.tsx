import { useEffect, useState } from "react";

export default function App() {
  const [cardList, setCardList] = useState([]);
  function getNewCards(amount: number) {
    if (amount > 78) throw new Error("amount too large");
    fetch(`https://tarotapi.dev/api/v1/cards/random?n=${amount}`)
      .then((response) => response.json())
      .then((response) => {
        setCardList(response.cards);
        console.log(response);
        console.log(cardList);
      })
      .catch((error) => console.error(error));
  }

  if (cardList.length < 1) getNewCards(20);

  return (
    <>
      <div>
        {cardList.map((card) => {
          return (
            <div className="card" key={card.name_short}>
              <h4>{card.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
