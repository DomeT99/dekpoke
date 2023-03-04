<script setup lang="ts">
	let parameter =
		useRoute().params.nome.toString().charAt(0).toLocaleUpperCase() +
		useRoute().params.nome.toString().slice(1);

	useHead({
		title: `Dekpoke - ${parameter}`,
	});
</script>
<template>
	<section class="container pt-[6rem] mx-auto flex justify-center">
		<header>
			<figure
				class="sm:p-[3rem] p-[1.2rem] bg-[var(--tertiary-color)] rounded-full border-2 border-[var(--secondary-color)]"
			>
				<Image
					:alt="parameter as string"
					class="sm:w-[7rem] w-[6rem]"
					:path="'/images/ash.png'"
				/>
			</figure>
			<div class="text-center">
				<h1>{{ parameter as string }}</h1>
			</div>
		</header>
	</section>
</template>
