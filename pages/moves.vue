<script setup lang="ts">
import { Move } from "~~/modules/Models/Pokemon";
import { useComponentStore } from "../store/componentStore";
import { useMoveStore } from "../store/moveStore";

const componentStore = useComponentStore();
const moveStore = useMoveStore();

onNuxtReady(async () => {
  if (moveStore.moveComputed.length <= 0) {
    const { data, pending } = await useLazyFetch<Move[]>("/api/moves.json");

    _forEach(data.value, (move: Move) => moveStore.moveComputed.push(move));

    componentStore.isLoading = pending.value;
  }
});

const moveArray = computed(() => {
  return moveStore.moveComputed;
});
</script>
<template>
  <Spinner v-if="componentStore.isLoading" />
  <section class="container mx-auto" v-else>
    <header class="text-center mb-[3rem] mt-[3rem]">
      <h1>Moves</h1>
    </header>
    <div>
      <Table
        :data="moveArray"
        :table-header="['Moves', 'Power', 'Accuracy', 'Type']"
      />
    </div>
  </section>
</template>
