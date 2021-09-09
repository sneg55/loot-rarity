import type { Guild } from "./guilds";

import { rarityImageFromItems } from "../..";
import loot from "../../data/loot.json";
import { match } from "assert";

export function useBag(
  id: string,
  guilds: Guild[],
  {
    displayColors,
    displayLevels,
  }: { displayColors: boolean; displayLevels: boolean }
): null | { id: string; image: string } {
  const bagId = Number(id);

  if (isNaN(bagId) || bagId < 1 || bagId > 100) {
    return null;
  }

  const itemNames = Object.values(loot[bagId - 1][bagId]) as string[];

  return {
    id: String(bagId),
    image: rarityImageFromItems(itemNames, {
      displayLevels: displayLevels && displayColors,
      colorFn({ itemName }) {
        if (!displayColors) {
          return 'white'
        }
        
      },
    }),
  };
}
