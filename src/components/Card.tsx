import type { TarotCard } from "../types";

type CardProps = {
  card: TarotCard;
};

export default function Card({ card }: CardProps) {
  return (
    <div className="card">
      <h2>{card.name}</h2>
      <p>{card.desc}</p>
    </div>
  );
}
