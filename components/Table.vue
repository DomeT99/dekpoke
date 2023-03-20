<script setup lang="ts">
interface Table {
  tableHeader: string[];
  data: object[];
}

const props = defineProps<Table>();

const tdWidth = computed(() => `${_divide(100, props.tableHeader.length)}%`);
</script>

<template>
  <div class="flex justify-center mx-auto mb-16">
    <div class="flex flex-col overflow-x-scroll md:overflow-x-auto">
      <table
        :id="_uniqueId('')"
        class="divide-y divide-y-2 divide-[var(--secondary-color)] border-4 border-[var(--secondary-color)] table-fixed"
      >
        <thead class="bg-gray-50 table w-full">
          <tr class="bg-[var(--primary-color)]">
            <th
              :style="`width:${tdWidth}`"
              class="px-6 py-2 sm:text-lg text-xs text-[var(--secondary-color)]"
              v-for="head in props.tableHeader"
              :key="_uniqueId('')"
            >
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody
          class="bg-white divide-y divide-[var(--tertiary-color)] h-[400px] overflow-y-auto sm:overflow-x-hidden block"
        >
          <tr
            class="text-center block"
            v-for="obj in props.data"
            :key="_uniqueId('')"
          >
            <td
              :style="`width:${tdWidth}`"
              class="px-6 py-4 text-sm text-[var(--secondary-color)] inline-block"
              v-for="data in obj"
              :key="_uniqueId('')"
              v-html="data"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
