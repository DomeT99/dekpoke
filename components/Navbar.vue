<script setup lang="ts">
	const menu = [
		{ title: "Pokemon", path: "/" },
		{ title: "Moves", path: "/moves" },
		{ title: "Items", path: "/items" },
		{ title: "Machines", path: "/machines" },
	];
</script>

<template>
	<nav
		class="p-4 bg-[var(--primary-color)] text-[var(--quaternary-color)] border-b-2 border-b-[var(--secondary-color)]"
	>
		<ul
			class="flex md:space-x-8 flex-col space-y-4 md:flex-row md:space-y-0 md:text-lg text-sm"
		>
			<span
				v-for="voice in menu"
				class="border-2 p-1 border-[var(--secondary-color)] rounded-lg bg-[var(--quaternary-color)] text-[var(--secondary-color)] w-24 text-center border-b-[5px]"
				><NuxtLink :to="voice.path">{{ voice.title }}</NuxtLink></span
			>
		</ul>
	</nav>
</template>
