<script setup lang="ts">
let pokemon = computed(() => {
  return new URL("./assets/images/6366-pokehuh.png", import.meta.url).href;
});

defineProps(["error"]);
</script>

<template>
  <div class="md:h-[55rem] h-[45rem] grid content-center">
    <div class="text-center p-4 mx-auto">
      <h1>Oooopsss...</h1>
    </div>
    <div class="text-center p-4 mx-auto">
      <h2>Error {{ error.statusCode }}</h2>
      <h3>{{ error.message }}</h3>
    </div>
    <div class="flex justify-center">
      <Image :alt="'Pikachu'" :path="pokemon" />
    </div>
    <div class="flex justify-center sm:mt-[60px] mt-[40px]">
      <Button
        :function="() => $router.push('/')"
        class="cursor-pointer font-semibold border-2 p-1 border-[var(--secondary-color)] rounded-lg bg-[var(--quaternary-color)] text-[var(--secondary-color)] w-24 text-center border-b-[5px]"
      >
        Back
      </Button>
    </div>
  </div>
</template>
