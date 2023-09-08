<template>
	<details class="group border-b pb-3" :open="isOpen">
		<summary
			class="flex justify-between items-center cursor-pointer list-none    "
		>
			<h3>{{ title }}</h3>
			<span class="pl-3 transition group-open:rotate-[-90deg]">
				<svg
					fill="none"
					height="24"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					width="24"
				>
					<path d="M6 9l6 6 6-6"></path>
				</svg>
			</span>
		</summary>
		<p class="group-open:animate-fadeIn pt-3 transition-[height] duration-500 ease-in-out">
			{{ text }}
		</p>
	</details>
</template>
<script setup lang="ts">
const { text, title , isOpen} = defineProps<{
	title: string
	text: string
  isOpen?: boolean
}>()
</script>
