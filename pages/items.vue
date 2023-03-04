<script setup lang="ts">
	let daa = [
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
		{
			h: "hh",
			a: "dsa",
			s: "aa",
			d: "a",
		},
	];
</script>
<template>
	<section class="container mx-auto">
		<header class="text-center mb-[3rem] mt-[3rem]">
			<h1>Items</h1>
		</header>

		<div>
			<Table :data="daa" :table-header="['Name', 'Cost', 'Effect', 'Sprite']" />
		</div>
	</section>
</template>
