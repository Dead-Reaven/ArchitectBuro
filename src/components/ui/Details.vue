<template>
	<div class="group border-b pb-0 overflow-hidden" @click="toggleState(index)">
		<div class="flex justify-between items-center cursor-pointer list-none">
			<h3>{{ title }}</h3>
			<span class="pl-3 transition" :class="{ 'rotate-[-90deg]': isOpen }">
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
		</div>
		<p
			class="pt-3 visible transition-all ease-in-out duration-1000 "
			:class="[
				{ 'max-[400px]:h-[240px] max-md:h-[160px] md:h-[120px] lg:h-[190px] duration-1000': isOpen },
				{ 'h-0 invisible duration-[0.7s]': !isOpen },
			]"
		>
			{{  text  }}
		</p>
	</div>
</template>
<script setup lang="ts">
const { text, title, isOpen, index, toggleState } = defineProps<{
	title: string
	text: string
	index: number
	isOpen: boolean
	toggleState: (index: number, isOpened?: boolean) => void
}>()
</script>
