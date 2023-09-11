<template>
	<div class="flex flex-col text-center">
		<img :src="data.img" class="min-w-[256px] min-h-[222px]" alt="person" />
		<p class="pt-6 pb-2 font-[600]">{{ data.fullName }}</p>
		<p class="text-gray-50  font-[400]">{{ data.position }}</p>
	</div>
</template>

<script setup lang="ts">
const { data } = defineProps<{
	data: {
		fullName: string
		position: string
		img: any
	}
}>()
</script>

<style scoped></style>
