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
  </section>
</template>
