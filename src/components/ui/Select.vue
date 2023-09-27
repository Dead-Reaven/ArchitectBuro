<template>
	<router-link class="block p-10" :to="href ?? '/'">
		{{ title }}
	</router-link>
</template>
<script setup lang="ts">
const { item } = defineProps<{
	item: { title: string; href?: string }
}>()
const { title, href } = item
</script>
