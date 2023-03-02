<script setup lang="ts">
interface Table {
  tableHeader: string[];
  data: object[];
}
const props = defineProps<Table>();

</script>

<template>
  <div class="flex justify-center mx-auto">
    <div class="flex flex-col">
      <table
        class="divide-y divide-y-2 divide-[var(--secondary-color)] border-4 rounded-3xl border-[var(--secondary-color)]"
      >
        <thead class="bg-gray-50">
          <tr class="bg-[var(--primary-color)]">
            <th
              v-for="head in props.tableHeader"
              class="px-6 py-2 sm:text-lg text-xs text-[var()]"
            >
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-[var(--tertiary-color)]">
          <tr class="text-center" v-for="obj in props.data">
            <td class="px-6 py-4 text-sm text-[var(--secondary-color)]" v-for="data in obj">
              {{ data }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
