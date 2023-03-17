<script setup lang="ts">
let stats = [
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
  "Attack",
];
</script>
<template>
  <Box :background-color="'--quaternary-color'">
    <div class="grid grid-cols-3 p-2" v-for="i in stats">
      <div class="col-start-2">
        <h2>{{ i }}</h2>
      </div>
    </div>
  </Box>
</template>
