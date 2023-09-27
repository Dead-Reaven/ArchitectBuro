<template>
	<router-link v-if="!href?.includes('#')" class="block p-10" :to="href ?? '/'">
		{{ title }}
	</router-link>
	<a v-else :href="href"  class="block p-10">
		{{ title }}
	</a>
</template>
<script setup lang="ts">
const { item } = defineProps<{
	item: { title: string; href?: string }
}>()
const { title, href } = item
</script>
