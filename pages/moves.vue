<script setup lang="ts">
let daa = [
  {
    h: "hh",
    a: "dsa",
    s: "aa",
    d: "a",
  },
  {
    h: "hh",
    a: "dsa",
    s: "aa",
    d: "a",
  },
];
</script>
<template>
  <section class="container mx-auto">
    <header class="text-center mb-[3rem] mt-[3rem]">
      <h1>Moves</h1>
    </header>
    <div>
      <Table
        :data="daa"
        :table-header="['Moves', 'Power', 'Accuracy', 'Type']"
      />
    </div>
  </section>
</template>
