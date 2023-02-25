<script setup lang="ts">
let nuxtLogo = computed(() => {
  return new URL("../assets/images/ash.png", import.meta.url).href;
});
</script>
<template>
  <figure class="rounded-xl border-[3px] border-[var(--secondary-color)]">
    <div
      class="flex w-full justify-center border-b-2 border-b-[var(--secondary-color)] p-8 bg-[var(--primary-color)]"
    >
      <div
        class="rounded-full border-[2px] border-[var(--secondary-color)] p-4 bg-[var(--quaternary-color)]"
      >
        <Image
          :alt="'Pokemon'"
          class="w-24 h-24 rounded"
          :height="512"
          :width="384"
          :path="nuxtLogo"
        />
      </div>
    </div>

    <div class="pt-6 space-y-4 text-center p-4 bg-[var(--quaternary-color)]">
      <blockquote>
        <h2>Pokemon</h2>
      </blockquote>
    </div>
    <div class="pt-6 space-y-4 text-center p-4 bg-[var(--quaternary-color)]">
      <Button
        :function="() => null"
        class="cursor-pointer font-semibold border-2 p-1 pb-2 border-[var(--secondary-color)] rounded-lg bg-[var(--primary-color)] text-[var(--quaternary-color)] w-24 text-center border-b-[5px]"
      >
        <p>Details</p>
      </Button>
    </div>
  </figure>
</template>
