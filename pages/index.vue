<script setup lang="ts">
import { Pokemon } from "~~/modules/Models/Pokemon";
import { useComponentStore } from "../store/componentStore";
import { usePokeStore } from "../store/pokeStore";

const componentStore = useComponentStore();
const store = usePokeStore();

const call = new CallData<Pokemon>();

const pokemonComputed = computed(() => store.pokemonArray);

onNuxtReady(async () => await call.useGet("/api/pokemon.json", store.pokemonArray));

</script>
<template>
  <Spinner v-if="componentStore.isLoading" />
  <section class="container mx-auto" v-else>
    <header class="text-center mb-[3rem] mt-[3rem]">
      <h1>List of Pokemon</h1>
    </header>

    <div
      class="grid lg:grid-cols-6 md:grid-cols-3 gap-[3rem] mb-[8rem] max-h-[50rem] overflow-auto p-8 bg-[var(--tertiary-color)] border-4 border-[var(--secondary-color)] rounded-lg"
    >
      <div v-for="pokemon in pokemonComputed">
        <Card
          :func="() => useRouter().push(`/pokemon/${pokemon.Name}`)"
          :image="pokemon.Sprites?.Front_Default"
          :title="pokemon.Name"
        />
      </div>
    </div>
  </section>
</template>
