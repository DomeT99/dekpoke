<script setup lang="ts">
let parameter =
  useRoute().params.nome.toString().charAt(0).toLocaleUpperCase() +
  useRoute().params.nome.toString().slice(1);

useHead({
  title: `Dekpoke - ${parameter}`,
});
</script>
<template>
  <section class="container pt-[6rem] mx-auto">
    <Header />
    <article class="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-[6rem] mb-8">
      <div class="lg:col-start-1 md:col-start-1">
        <GeneralVoices />
      </div>
      <div class="lg:col-start-2 md:col-start-1">
        <Stats />
      </div>
      <div class="lg:col-start-3 md:col-start-1"></div>
    </article>
  </section>
</template>
