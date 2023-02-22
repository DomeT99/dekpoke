<script setup lang="ts">
type ButtonType = "button" | "submit" | "reset";

interface Button<T> {
  function(params: T): T;
  type?: ButtonType;
}

const props = defineProps<Button<unknown>>();
</script>
<template>
  <template v-if="props.type === 'submit'">
    <button :type="props.type" @click.prevent="props.function">
      <slot></slot>
    </button>
  </template>

  <template v-else>
    <button :type="props.type" @click="props.function">
      <slot></slot>
    </button>
  </template>
</template>
