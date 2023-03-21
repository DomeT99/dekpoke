<script setup lang="ts">
import { Type } from "~~/modules/Models/Pokemon";

interface Header {
  title: string;
  path: string;
  types: Type[];
}

const props = defineProps<Header>();

const titleComput = computed(
  () => props.title?.charAt(0).toLocaleUpperCase() + props.title!.slice(1)
);
</script>
<template>
  <header class="grid lg:grid-cols-7 md:grid-cols-3">
    <div class="lg:col-start-4 md:col-start-2">
      <figure
        class="md:w-[13.5rem] w-[9.5rem] bg-[var(--sixth-color)] rounded-full border-2 border-[var(--secondary-color)] flex justify-center mx-auto"
      >
        <Image :alt="titleComput" class="w-full" :path="props.path" />
      </figure>
      <div class="text-center mt-8 mx-auto">
        <h1>{{ titleComput }}</h1>

        <div v-for="t in props.types" class="mt-8 inline-flex ml-2 bg-[var(--tertiary-color)] p-1 rounded-full">
          <h3>{{ t.Name }}</h3>
        </div>
      </div>
    </div>
  </header>
</template>
