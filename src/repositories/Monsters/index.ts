import { IMonster } from "@/util/interfaces/Monster.interface";

export const getMonsters = async () => {
  const tasks = await fetch("/monsters");
  return tasks.json();
};

export const addMonster = async (monster: IMonster) => {
  return await fetch("/monsters", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(monster),
  });
};
