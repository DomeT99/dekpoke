<script setup lang="ts">
const dynamicTitle = computed(() => {
  let routeName = useRoute().name?.toString();

  return routeName!.charAt(0).toLocaleUpperCase() + routeName!.slice(1);
});
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
