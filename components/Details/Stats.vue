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
  <Box>
    <div class="grid grid-cols-2" v-for="i in stats">
      <div>
        <h2>{{ i.name }}</h2>
      </div>
      <div>
        <h2>{{ i.stat }}</h2>
      </div>
    </div>
  </Box>
</template>
