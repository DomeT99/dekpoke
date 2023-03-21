<script setup lang="ts">
import { Pokemon } from "~~/modules/Models/Pokemon";
import { usePokeStore } from "~~/store/pokeStore";

let parameter =
  useRoute().params.nome.toString().charAt(0).toLocaleUpperCase() +
  useRoute().params.nome.toString().slice(1);

useHead({
  title: `Dekpoke - ${parameter}`,
});
const pokemon: Ref<Pokemon> = ref({
  Id: 0,
  Name: "",
  Stats: [],
  Sprites: {
    Front_Default: "",
    Front_Shiny: "",
  },
  Types: [],
  Moves: [],
});
const pokeStore = usePokeStore();

const pokeComputed = computed(
  () =>
    (pokemon.value = _find(
      pokeStore.pokemonComputed,
      (pokemon: Pokemon) => pokemon.Name === useRoute().params.nome
    )!)
);
</script>
<template>
  <section class="container pt-[6rem] mx-auto">
    <Header :types="pokeComputed.Types!" :title="pokeComputed.Name!" :path="pokeComputed.Sprites?.Front_Default!" />
    
    <article class="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-[6rem] mb-8">
      <div class="lg:col-start-1 md:col-start-1">
        <Stats :stats="pokeComputed.Stats!" />
      </div>
      <div class="lg:col-start-2 md:col-start-1">
        <Moves :names="pokeComputed.Moves!" />
      </div>
    </article>
  </section>
</template>
