<script setup lang="ts">
let general = [
  { name: "Base Experience", value: 65 },
  { name: "Weight", value: 65 },
  { name: "Height", value: 65 },
];
</script>
<template>
  <Box :background-color="'--quaternary-color'">
    <div class="grid grid-cols-3 p-2" v-for="i in general">
      <div class="col-start-1 col-end-3">
        <h2>{{ i.name }}</h2>
      </div>
      <div>
        <h2>{{ i.value }}</h2>
      </div>
    </div>
  </Box>
</template>
