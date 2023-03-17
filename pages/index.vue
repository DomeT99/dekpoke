<script setup lang="ts">
import { Pokemon } from "~~/modules/Models/Pokemon";

const pokemonComputed: Ref<Pokemon[]> = ref([]);
const isLoading = ref(true);

onNuxtReady(async () => {
  const { data, pending } = await useLazyFetch<Pokemon[]>("/api/pokemon.json");

  data.value?.forEach((pokemon: Pokemon) =>
    pokemonComputed.value.push(pokemon)
  );

  isLoading.value = pending.value;
});

const pokemonArray = computed(() => {
  return pokemonComputed.value;
});
</script>
<template>
  <Spinner v-show="isLoading" />
  <section class="container mx-auto">
    <header class="text-center mb-[3rem] mt-[3rem]">
      <h1>List of Pokemon</h1>
    </header>

    <div
      class="grid lg:grid-cols-6 md:grid-cols-3 gap-[3rem] mb-[8rem] max-h-[50rem] overflow-auto p-8 bg-[var(--tertiary-color)] border-4 border-[var(--secondary-color)] rounded-lg"
    >
      <div v-for="pokemon in pokemonArray">
        <Card :image="pokemon.Sprites?.Front_Default" :title="pokemon.Name" />
      </div>
    </div>
  </section>
</template>
