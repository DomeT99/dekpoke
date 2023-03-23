<script setup lang="ts">
import { Move } from "~~/modules/Models/Pokemon";
import { useComponentStore } from "../store/componentStore";
import { useMoveStore } from "../store/moveStore";

const componentStore = useComponentStore();
const store = useMoveStore();
const config = useRuntimeConfig();

const call = new CallData<Move>();

const moveComputed = computed(() => store.moveArray);

onNuxtReady(async () => await call.useGet(config.public.movesUrl, store.moveArray));
</script>
<template>
  <Spinner v-if="componentStore.isLoading" />
  <section class="container mx-auto" v-else>
    <GenericHeader>Moves</GenericHeader>
    <Table
      :data="moveComputed"
      :table-header="['Moves', 'Power', 'Accuracy', 'Type']"
    />
  </section>
</template>
