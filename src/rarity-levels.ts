// Each rarity level is defined using a number that represents the maximum
// number of occurences required to be in that level.
// See scripts/generate-items-rarity.ts to see how it is used.
export default [
  [-1, "#838383", "Common"],
  [15, "#00DC82", "Uncommon"],
  [12, "#2e82ff", "Rare"],
  [8, "#c13cff", "Epic"],
  [5, "#f8b73e", "Legendary"],
  [1, "#ff44b7", "Mythic"],
] as Array<[number, string, string]>;
