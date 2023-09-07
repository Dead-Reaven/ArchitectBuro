<template>
	<div>{{ title }}</div>
	
</template>
<script setup lang="ts">
const { title, menu } = defineProps<{
	title: string
	menu: {
		label: string
		href: string
	}[]
}>()
</script>
