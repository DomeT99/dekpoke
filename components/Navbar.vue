<script setup lang="ts">
const menu = [
  { title: "Pokemon", path: "/" },
  { title: "Moves", path: "/moves" },
  { title: "Items", path: "/items" },
  { title: "Machines", path: "/machines" },
];

const logo = computed(() => {
  return new URL("@/assets/images/ash.png", import.meta.url).href;  
});
const appName = computed(()=>{
  return new URL("@/assets/images/nome-app.png", import.meta.url).href;    
})

function openMobileMenu() {
  document.querySelector("#mobile-menu")!.classList.toggle("hidden");
}
</script>

<template>
  <nav
    class="bg-[var(--quaternary-color)] text-[var(--quaternary-color)] border-b-2 border-b-[var(--secondary-color)] p-2"
  >
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="openMobileMenu"
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[var(--tertiary-color)] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--secondary-color)]"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only"></span>

            <svg
              class="block h-6 w-6 text-[var(--secondary-color)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              class="hidden h-6 w-6 text-[var(--secondary-color)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            
            <Image :height="120" :width="120" class="hidden h-[50px] w-auto lg:block mt-1 mr-2" :alt="'Dekpoke Logo'" :path="appName" />
            <Image :height="120" :width="120" class="block h-[50px] w-auto lg:hidden" :alt="'Dekpoke Logo'" :path="appName" />
          </div>
          <div class="hidden sm:ml-6 sm:mt-2 sm:block">
            <div class="flex space-x-4">
              <span
                v-for="voice in menu"
                class="cursor-pointer font-semibold border-2 p-2 border-[var(--secondary-color)] rounded-lg bg-[var(--tertiary-color)] text-[var(--secondary-color)] w-32 text-center border-b-[5px]"
                ><NuxtLink :to="voice.path">{{ voice.title }}</NuxtLink></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:hidden hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3 mb-4">
        <span
          v-for="voice in menu"
          class="cursor-pointer w-full mt-4 block font-semibold border-2 p-1 border-[var(--secondary-color)] rounded-lg bg-[var(--tertiary-color)] text-[var(--secondary-color)] w-24 text-center border-b-[5px]"
          ><NuxtLink :to="voice.path">{{ voice.title }}</NuxtLink></span
        >
      </div>
    </div>
  </nav>
</template>
