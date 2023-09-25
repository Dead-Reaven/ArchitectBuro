<template>
	<div
		class="flex flex-col gap-[25px] justify-center max-md:mx-auto text-center h-[208px] w-[208px] rounded-full bg-info-block backdrop-blur-[11.30563735961914px]"
	>
		<p class="count">{{ count }}+</p>
		<p class="text">
			{{ text }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const {
	count,
	text,
	// speedInterval,
} = defineProps<{ count: number; text: any; speedInterval: number }>()

// const counter = ref(0)
// onMounted(() => {
// 	const interval = setInterval(() => {
// 		if (counter.value < initialCount) counter.value += 1
// 		else clearInterval(interval)
// 	}, speedInterval) // Adjust the interval as needed
// }, )
</script>

<style scoped>
.count {
	color: white;
	text-align: center;
	font-size: 36px;
	font-weight: 500;
	line-height: 38.662px; /* 107.394% */
}
.text {
	color: #fff;
	/* Caption */
	font-size: 16px;
	font-weight: 700;
	line-height: 16px; /* 100% */
	text-transform: uppercase;
}
</style>
