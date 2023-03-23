<script setup lang="ts">
import { Item } from "~~/modules/Models/Item";
import { useComponentStore } from "../store/componentStore";
import { useItemStore } from "../store/itemStore";

const componentStore = useComponentStore();
const store = useItemStore();

onNuxtReady(async () => {
  await fetchItems();
});

const itemArray = computed(() => store.itemComputed);

const fetchItems = async () => {
  try {
    if (store.itemComputed.length <= 0) {
      const { data, pending } = await useLazyFetch<Item[]>("/api/items.json");

      _forEach(data.value, (item: Item) => {
        item.Sprite = `<img class="display-img-override" src="${item.Sprite}" alt="${item.Name}"/>`;
        store.itemComputed.push(item);
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
    <GenericHeader>Items</GenericHeader>

    <Table
      :data="itemArray"
      :table-header="['Name', 'Cost', 'Effect', 'Sprite']"
    />
  </section>
</template>
