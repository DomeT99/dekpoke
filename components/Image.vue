<script setup lang="ts">
interface Image {
  path: string;
  width?: number;
  height?: number;
  alt?: string;
}

const props = defineProps<Image>();
</script>
<template>
  <img
    :alt="props.alt ?? 'Default Alt'"
    :width="props.width ?? 150"
    :height="props.height ?? 150"
    :src="props.path"
  />
</template>
