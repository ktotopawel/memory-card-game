export type TarotCard = {
  type: string;
  name: string;
  name_short: string;
  value: string;
  value_int: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
  isGuessed: boolean;
};

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
