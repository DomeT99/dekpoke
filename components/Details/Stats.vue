<script setup lang="ts">
let stats = [
  { name: "HP", stat: "168" },
  { name: "Attack", stat: "168" },
  { name: "Defense", stat: "168" },
  { name: "Special Atk.", stat: "168" },
  { name: "Special Def.", stat: "168" },
  { name: "Speed.", stat: "168" },
];
</script>
<template>
  <Box :background-color="'--quaternary-color'">
    <div class="grid grid-cols-2 p-2" v-for="i in stats">
      <div class="col-start-1">
        <h2>{{ i.name }}</h2>
      </div>
      <div>
        <h2>{{ i.stat }}</h2>
      </div>
    </div>
  </Box>
</template>
