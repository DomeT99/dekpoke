import { defineStore } from "pinia";
import { Item } from "~~/modules/Models/Item";

export const useItemStore = defineStore("item", () => {
  const itemComputed: Ref<Item[]> = ref([]);


  return { itemComputed };
});
