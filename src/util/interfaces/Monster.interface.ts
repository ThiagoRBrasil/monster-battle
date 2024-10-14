export interface IMonster {
  name: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  image_url: string;
  is_selected?: boolean;
}
