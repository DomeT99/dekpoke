<script setup lang="ts">
import { Move } from "~~/modules/Models/Pokemon";

interface Moves {
  names: Move[];
}
const props = defineProps<Moves>();
</script>
<template>
  <Box :background-color="'--quaternary-color'">
    <div class="grid grid-cols-3 p-2" v-for="n in props.names">
      <div class="col-start-2">
        <h2>{{ n.Name }}</h2>
      </div>
    </div>
  </Box>
</template>
