import { defineStore } from "pinia";
import { Move } from "~~/modules/Models/Pokemon";

export const useMoveStore = defineStore("move", () => {
  const moveComputed: Ref<Move[]> = ref([]);


  return { moveComputed };
});
