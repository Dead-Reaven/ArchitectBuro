<script setup lang="ts">
import logo from '@/контакти.jpg'
</script>

<template>
	<main>
		<img :src="logo" alt="" />
		<div class="hero1"></div>
	</main>
</template>

<style lang="scss" scoped>
main {
	background: blanchedalmond;
	img {
		object-fit: cover;
	}
	.hero1 {
		background: url('@/замовити послугу.jpg');
		height: 300px;
		background-size: contain;
	}
}
</style>
