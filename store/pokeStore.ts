import { defineStore } from "pinia";
import { Pokemon } from "~~/modules/Models/Pokemon";

export const usePokeStore = defineStore("pokemon", () => {
  const pokemonArray: Ref<Pokemon[]> = ref([]);


  return { pokemonArray };
});
