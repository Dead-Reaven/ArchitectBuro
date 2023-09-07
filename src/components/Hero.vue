<template>
	<section>
		<swiper
			:pagination="paginationOptions"
			:modules="modules"
			class="min-h-[450px] h-[80vh]"
		>
			<swiper-slide
				class="relative"
				v-for="({ src, h, p }, index) in sliders"
				:key="index"
			>
				<div class="absolute w-full left-0 h-full object-cover bg-[#E3A02D]" />
				<img
					:src="src"
					class="opacity-85 absolute w-full left-0 h-full object-cover mix-blend-hard-light"
				/>

				<div
					class="z-10 h-full container pt-[125px] flex flex-col justify-around relative"
				>
					<!-- textcontainer -->
					<div class="shrink">
						<p>{{ h }}</p>
						<h1 class="pt-3 pb-10">{{ p }}</h1>
						<button class="btn-secondary">Всі проекти</button>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { PaginationOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'
import img1 from '@/слайдер/image hero1.jpg'
import img2 from '@/слайдер/Rectangle 62.jpg'
import img3 from '@/слайдер/Rectangle 63.jpg'
import img4 from '@/слайдер/Rectangle 64.jpg'

const paginationOptions: PaginationOptions = {
	clickable: true,
	renderBullet: (_, className) => {
		return `<span class="${className} w-[48px] h-[48px] rounded-full bg-blue-500"></span>`
	},
}
const modules = [Pagination]

const sliders = [
	{ src: img1, p: 'архітектура', h: 'ЖК Мій Дім' },
	{ src: img2, p: 'архітектура', h: 'ЖК Оазіс' },
	{ src: img3, p: `об'єктний дизайн`, h: 'Стіл Dubai' },
	{ src: img4, p: `об'єктний дизайн`, h: 'Комод Europe' },
]

defineProps()
</script>

<style>
.swiper-pagination {
}
</style>
