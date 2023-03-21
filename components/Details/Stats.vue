<script setup lang="ts">
import { Stat } from "~~/modules/Models/Pokemon";
interface Stats {
  stats: Stat[];
}

const props = defineProps<Stats>();
</script>
<template>
  <Box :background-color="'--quaternary-color'">
    <div class="grid grid-cols-2 p-2" v-for="s in props.stats">
      <div class="col-start-1">
        <h2>{{ s.Name }}</h2>
      </div>
      <div>
        <h2>{{ s.Base_Stat }}</h2>
      </div>
    </div>
  </Box>
</template>
