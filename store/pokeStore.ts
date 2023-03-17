import { defineStore } from "pinia";
import { Pokemon } from "~~/modules/Models/Pokemon";

export const usePokeStore = defineStore("pokemon", () => {
  const pokemonComputed: Ref<Pokemon[]> = ref([]);


  return { pokemonComputed };
});
