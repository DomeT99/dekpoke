<script setup lang="ts">
import { Colors } from '~~/modules/types';

interface Box {
  borderColor?: Colors;
  backgroundColor?: Colors;
}
const props = defineProps<Box>();
</script>
<template>
  <div
    :class="`border-4 rounded-xl border-[var(${
      props.borderColor ?? '--secondary-color'
    })] bg-[var(${props.backgroundColor ?? '--sixth-color'})] min-h-[35vh] max-h-[35vh] p-4 overflow-auto`"
  >
    <slot></slot>
  </div>
</template>
