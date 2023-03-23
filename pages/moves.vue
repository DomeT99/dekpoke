<script setup lang="ts">
import { Move } from "~~/modules/Models/Pokemon";
import { useComponentStore } from "../store/componentStore";
import { useMoveStore } from "../store/moveStore";

const componentStore = useComponentStore();
const store = useMoveStore();

const call = new CallData<Move>();

const moveComputed = computed(() => store.moveArray);

onNuxtReady(async () => await call.useGet("/api/moves.json", store.moveArray));

</script>
<template>
  <Spinner v-if="componentStore.isLoading" />
  <section class="container mx-auto" v-else>
    <header class="text-center mb-[3rem] mt-[3rem]">
      <h1>Moves</h1>
    </header>

    <Table
      :data="moveComputed"
      :table-header="['Moves', 'Power', 'Accuracy', 'Type']"
    />
  </section>
</template>
