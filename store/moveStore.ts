import { defineStore } from "pinia";
import { Move } from "~~/modules/Models/Pokemon";

export const useMoveStore = defineStore("move", () => {
  const moveArray: Ref<Move[]> = ref([]);


  return { moveArray };
});
