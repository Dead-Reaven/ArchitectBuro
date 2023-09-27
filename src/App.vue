<script setup lang="ts">
import { Footer, Header } from './components/'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
</script>

<template>
	<div class="min-h-screen mx-auto">
		<router-view name="header" />
		<router-view />
		<router-view name="footer" />
	</div>
</template>

<style scoped></style>
