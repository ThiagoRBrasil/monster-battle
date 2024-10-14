import { useEffect, useState } from "react";

import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";

import { addMonster, getMonsters } from "./repositories/Monsters";

import Battle from "./components/Battle";
import FormMonster from "@/components/FormMonster";
import Monster from "./components/Monster";
import { IMonster } from "@/util/interfaces/Monster.interface";
import { toast } from "sonner";

function App() {
  const MONSTER_MAX_TO_BATTLE = 2;

  const [monsters, setMonsters] = useState<IMonster[]>([]);
  const [warriors, setWarriors] = useState<IMonster[]>([]);

  const handleFetchMonsters = async () => {
    const monsters = await getMonsters();

    setMonsters(monsters);
  };

  useEffect(() => {
    handleFetchMonsters();
  }, []);

  function handleSelectMonsters(indexMonster: number) {
    if (monsters[indexMonster].is_selected) {
      const lessWarrior = warriors.filter(
        (warrior) => warrior.name != monsters[indexMonster].name
      );

      setWarriors(lessWarrior);
    } else {
      if (warriors.length == MONSTER_MAX_TO_BATTLE) {
        toast.warning("Número máximo de monstros selecionados para batalha");
        return;
      }

      setWarriors((prev) => [...prev, monsters[indexMonster]]);
    }

    const updatedMonsters = monsters.map((monster, index) => {
      if (index == indexMonster) {
        monster.is_selected =
          monster.is_selected != undefined ? !monster.is_selected : true;
      }

      return monster;
    });

    setMonsters(updatedMonsters);
  }

  async function handleNewMonster(newMonster: IMonster) {
    try {
      const existMonster = monsters.find(
        (monster) => monster.name === newMonster.name
      );

      if (existMonster) {
        toast.info("Você já possui esse monstro cadastrado!");
        return;
      }

      const res = await addMonster(newMonster);
      if (res.status === 201) {
        setMonsters([...monsters, newMonster]);
      } else {
        throw Error();
      }
    } catch {
      toast.warning(
        "Houve um problema para atualizar sua atividade.\nPor favor tente novamente mais tarde!"
      );
    }
  }

  return (
    <div className="p-2 tablet:max-w-full laptop:max-w-5xl desktop:max-w-4xl mx-auto">
      <Header />
      <h1 className="p-6">Batalha de Monstros</h1>

      <FormMonster onSubmit={handleNewMonster} />

      <div className="mx-6 my-6">
        <Separator />
      </div>

      {warriors.length == MONSTER_MAX_TO_BATTLE && (
        <div className="m-6">
          <Battle monsters={warriors} />
        </div>
      )}

      <section className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-2 mx-6">
        {monsters.map((monster, index) => (
          <Monster
            key={index}
            {...monster}
            onClick={() => handleSelectMonsters(index)}
            isSelected={monster.is_selected ?? false}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
