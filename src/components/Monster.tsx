import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface IMonster {
  name: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  image_url: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function Monster({
  name,
  attack,
  defense,
  speed,
  hp,
  image_url,
  onClick,
  isSelected,
}: IMonster) {
  return (
    <Card onClick={onClick} className={isSelected ? "bg-gray-400" : ""}>
      <CardContent className="flex flex-col p-4">
        <h1 className="text-xl font-bold">{name}</h1>
        <Separator className="my-4" />
        <div className="flex">
          <div className="flex flex-col items-start gap-2 flex-1 min-w-40">
            <span className="border rounded-lg px-3 py-1 w-auto">
              <p>Ataque {attack}</p>
            </span>
            <span className="border rounded-lg px-3 py-1 w-auto">
              <p>Defesa {defense}</p>
            </span>
            <span className="border rounded-lg px-3 py-1 w-auto">
              <p>Velocidade {speed}</p>
            </span>
            <span className="border rounded-lg px-3 py-1 w-auto">
              <p>HP {hp}</p>
            </span>
          </div>
          <div className="flex flex-0">
            <img
              src={image_url}
              className="w-48 h-full object-cover md:h-full md:w-48"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
