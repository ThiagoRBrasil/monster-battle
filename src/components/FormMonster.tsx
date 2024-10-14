import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { IMonster } from "@/util/interfaces/Monster.interface";

export interface IFormMonster {
  onSubmit: (newMonster: IMonster) => void;
}

export default function FormMonster({ onSubmit }: IFormMonster) {
  const [name, setName] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");
  const [hp, setHp] = useState("");
  const [image_url, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;
    if (!attack) return;
    if (!defense) return;
    if (!speed) return;
    if (!hp) return;
    if (!image_url) return;

    onSubmit({
      name,
      attack: parseInt(attack),
      defense: parseInt(defense),
      speed: parseInt(speed),
      hp: parseInt(hp),
      image_url,
    });

    setName("");
    setAttack("");
    setDefense("");
    setSpeed("");
    setHp("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="m-6 flex flex-col gap-2">
      <section>
        <div>
          <Label htmlFor="name">Novo monstro</Label>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div>
            <Label htmlFor="name">Ataque</Label>
            <Input
              id="attack"
              name="attack"
              value={attack}
              type="number"
              onChange={(e) => setAttack(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="name">Defesa</Label>
            <Input
              id="defense"
              name="defense"
              value={defense}
              type="number"
              onChange={(e) => setDefense(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="name">Velocidade</Label>
            <Input
              id="speed"
              name="speed"
              value={speed}
              type="number"
              onChange={(e) => setSpeed(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="name">HP</Label>
            <Input
              id="hp"
              name="hp"
              value={hp}
              type="number"
              onChange={(e) => setHp(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="name">Imgem</Label>
            <Input
              id="image_url"
              name="image_url"
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <Button className="bg-green-600 self-end">
            <PlusIcon className="mr-2 h-4 w-4" /> Add
          </Button>
        </div>
      </section>
    </form>
  );
}
