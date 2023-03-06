<script setup lang="ts"></script>
<template>
  <header class="grid lg:grid-cols-7 md:grid-cols-3">
    <div class="lg:col-start-4 md:col-start-2">
      <figure
        class="md:w-[13.5rem] w-[9.5rem] bg-[var(--tertiary-color)] rounded-full border-2 border-[var(--secondary-color)] flex justify-center mx-auto"
      >
        <Image
          :alt="'parameter'"
          class="w-full"
          :path="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'"
        />
      </figure>

      <div class="text-center mt-8 mx-auto">
        <h1>Bulbasaur</h1>
      </div>
    </div>
  </header>
</template>
