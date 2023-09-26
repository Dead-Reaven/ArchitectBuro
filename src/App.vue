<script setup lang="ts">
import { Footer, Header } from './components/'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
</script>

<template>
	<div class="min-h-screen mx-auto">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<style scoped></style>
