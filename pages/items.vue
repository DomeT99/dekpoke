<script setup lang="ts">
import { Item } from "~~/modules/Models/Item";
import { useComponentStore } from "../store/componentStore";
import { useItemStore } from "../store/itemStore";

const componentStore = useComponentStore();
const moveStore = useItemStore();

onNuxtReady(async () => {
  await fetchItems();
});

const itemArray = computed(() => moveStore.itemComputed);

const fetchItems = async () => {
  try {
    if (moveStore.itemComputed.length <= 0) {
      const { data, pending } = await useLazyFetch<Item[]>("/api/items.json");

      _forEach(data.value, (move: Item) => {
        move.Sprite = `<img class="display-img-override" src="${move.Sprite}" alt="${move.Name}"/>`;
        moveStore.itemComputed.push(move);
      });

      componentStore.isLoading = pending.value;
    }
  } catch (e) {
    throw e;
  }
};
</script>
<template>
  <Spinner v-if="componentStore.isLoading" />
  <section class="container mx-auto" v-else>
    <header class="text-center mb-[3rem] mt-[3rem]">
      <h1>Items</h1>
    </header>

    <div>
      <Table
        :data="itemArray"
        :table-header="['Name', 'Cost', 'Effect', 'Sprite']"
      />
    </div>
  </section>
</template>
