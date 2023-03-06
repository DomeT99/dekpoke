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
    <article class="grid sm:grid-cols-2 gap-8 mt-[6rem]">
      <Stats />
      <Stats />
    </article>
  </section>
</template>
