<script setup lang="ts"></script>

<template>
	<div class="flex justify-center mx-auto">
		<div class="flex flex-col">
			<table
				class="divide-y divide-y-2 divide-[var(--secondary-color)] border-2 rounded-lg border-[var(--secondary-color)]"
			>
				<thead class="bg-gray-50">
					<tr class="bg-[var(--primary-color)]">
						<th class="px-6 py-2 sm:text-lg text-xs text-[var()]">Moves</th>
						<th
							class="px-6 py-2 sm:text-lg text-xs text-[var(--secondary-color)]"
						>
							Power
						</th>
						<th
							class="px-6 py-2 sm:text-lg text-xs text-[var(--secondary-color)]"
						>
							Accuracy
						</th>
						<th
							class="px-6 py-2 sm:text-lg text-xs text-[var(--secondary-color)]"
						>
							Type
						</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-[var(--tertiary-color)]">
					<tr class="text-center">
						<td class="px-6 py-4 text-sm text-[var(--secondary-color)]">
							Heartquake
						</td>
						<td class="px-6 py-4">
							<div class="text-sm text-[var(--secondary-color)]">90</div>
						</td>
						<td class="px-6 py-4">
							<div class="text-sm text-[var(--secondary-color)]">100</div>
						</td>
                        <td class="px-6 py-4">
							<div class="text-sm text-[var(--secondary-color)]">100</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
