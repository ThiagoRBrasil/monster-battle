import { IMonster } from "@/util/interfaces/Monster.interface";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface IBattle {
  monsters: IMonster[];
}

export default function Battle({ monsters }: IBattle) {
  const MONSTER_MAX_TO_BATTLE = 2;

  const [monsterWinner, setMonsterWinner] = useState<IMonster | null>(null);

  let monster1 = { ...monsters[0] };
  let monster2 = { ...monsters[1] };

  function battle(attacker: IMonster, defender: IMonster) {
    const damage = attacker.attack - defender.defense;
    if (damage > 0) {
      defender.hp = Math.max(defender.hp - damage, 0);
    } else {
      defender.hp = 0;
    }
    return defender;
  }

  function handleToBattle() {
    if (monsters.length !== MONSTER_MAX_TO_BATTLE) {
      toast.warning(
        `Selecione ${MONSTER_MAX_TO_BATTLE} monstro(s) para realizar a batalha`
      );

      return;
    }

    if (monsters[1].speed >= monsters[0].speed) {
      monster1 = { ...monsters[1] };
      monster2 = { ...monsters[0] };
    }

    while (monster1.hp > 0 && monster2.hp > 0) {
      monster2 = battle(monster1, monster2);

      const monsterTemp = monster1;
      monster1 = monster2;
      monster2 = monsterTemp;
    }

    setMonsterWinner(monster1.hp > 0 ? monster1 : monster2);
  }

  return (
    <>
      <Button className="bg-red-600 w-full uppercase" onClick={handleToBattle}>
        Batalhar
      </Button>

      {monsterWinner && (
        <>
          <h1 className="text-center text-3xl mt-4">
            {monsterWinner?.name ?? ""} é o vencedor
          </h1>
        </>
      )}
    </>
  );
}
