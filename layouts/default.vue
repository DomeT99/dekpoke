<script setup lang="ts">
const dynamicTitle = computed(() => useUpperCase(useRoute().name?.toString()!));
</script>

<template>
  <Head>
    <Title
      >Dekpoke -
      {{ dynamicTitle === "Index" ? "Pokemon" : dynamicTitle }}</Title
    >
    <Navbar />
    <section class="min-h-screen">
      <slot></slot>
    </section>
    <Footer />
  </Head>
</template>
