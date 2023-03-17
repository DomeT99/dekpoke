import { defineStore } from "pinia";

export const useComponentStore = defineStore("component", () => {
  const isLoading = ref(true);

  return { isLoading };
});
