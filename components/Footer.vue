<script setup lang="ts">
let nuxtLogo = computed(() => {
  return new URL("../assets/images/built-with-nuxt.svg", import.meta.url).href;   
});

const dateNow = computed(() => {
  return new Date().getFullYear();
});

function openLinkTree() {
  window.open("https://linktr.ee/domenicotenace");
}

function openNuxt() {
  window.open("https://nuxt.com/");
}
</script>
<template>
  <footer
    class="min-h-[130px] border-t-2 border-t-[var(--secondary-color)] bg-[var(--tertiary-color)] text-center"
  >
    <div class="mt-6 flex justify-center">
      <Image
        :alt="'Built with Nuxt'"
        :class="'cursor-pointer'"
        @click="openNuxt"
        :height="170"
        :width="170"
        :path="nuxtLogo"
      />
    </div>

    <div class="mt-6">
      <h3 class="cursor-pointer text-base" @click="openLinkTree">
         Domenico "Dvalin" Tenace {{ dateNow }}
      </h3>
    </div>
  </footer>
</template>
