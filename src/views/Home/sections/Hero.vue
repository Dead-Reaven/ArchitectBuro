<template>
	<section>
		<swiper
			:pagination="paginationOptions"
			:modules="modules"
			:loop="true"
			class="min-h-[450px] h-hero-full lg:h-hero-full-lg"
		>
			<swiper-slide
				class="relative"
				v-for="({ src, h, p }, index) in sliders"
				:key="index"
			>
				<!-- bg effect -->
				<div class="absolute w-full left-0 h-full object-cover bg-[#E3A02D]" />
				<img
					:src="src"
					alt="bg"
					class="opacity-85 absolute w-full left-0 h-full object-cover mix-blend-hard-light"
				/>
				<!-- bg effect -->
				<!-- textcontainer -->
				<div
					class="pb-[200px] z-10 h-full container flex flex-col justify-around relative"
				>
					<div class="shrink">
						<p class="caption">{{ p }}</p>
						<h1 class="pt-3 pb-10">{{ h }}</h1>
						<router-link to="/projects">
							<button class="btn-secondary">Всі проекти</button>
						</router-link>
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
import img1 from '@/слайдер/hero.jpg'
import img2 from '@/слайдер/Rectangle 62.jpg'
import img3 from '@/слайдер/Rectangle 63.jpg'
import img4 from '@/слайдер/Rectangle 64.jpg'

const paginationOptions: PaginationOptions = {
	clickable: true,
	bulletActiveClass: 'bullet-active',
	renderBullet: (_, className) => {
		return `<div class="${className} h-12 w-12 bg-transparent opacity-100">
			<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
  			<circle cx="24" cy="24.7778" r="8" fill="#23262F"/>
			</svg>
			</div>`
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
