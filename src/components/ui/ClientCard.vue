<template>
	<div
		class="flex flex-col justify-between max-w-[360px] min-h-[432px] px-8 py-16 rounded-[20px] bg-blue-30"
	>
		<!-- profile img   -->
		<div>
			<img :src="src" alt="img" class="h-[72px] w-[72px] rounded-full" />
		</div>
		<!-- text container -->
		<div class="py-8">
			<h4 class="pb-4">{{ title }}</h4>
			<p>{{ body }}</p>
		</div>
		<!-- stars -->
		<div class="flex">
			<img v-for="_ in starsArr" class="h-6 w-6" src="@/clients/star.svg" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { client } = defineProps<{
	client: {
		src: any
		title: string
		body: string
		stars: number
	}
}>()
const { body, src, stars, title } = client

const starsArr = ref([0])
while (starsArr.value.length < stars) {
	starsArr.value.push(0)
}

// const starsArr = []
</script>

<style scoped></style>
