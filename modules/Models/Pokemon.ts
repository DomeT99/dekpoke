export interface Pokemon {
  Id?: number;
  Name?: string;
  Base_Experience?: number;
  Height?: number;
  Weight?: number;
  Stats?: Stat[];
  Sprites?: Sprites;
  Types?: Type[];
  Moves?: Move[];
}

export interface Move {
  Name?: string;
  Power?: number;
  Accuracy?: number;
  Type?: null;
}

export interface Sprites {
  Front_Default?: string;
  Front_Shiny?: string;
}

export interface Stat {
  Name?: string;
  Base_Stat?: number;
}

export interface Type {
  Slot?: number;
  Name?: string;
}
