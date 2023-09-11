<template>
	<section class="section-container">
		<div>
			<div class="md:flex md:flex-row-reverse md:justify-between">
				<!-- text conteiner -->
				<div class="md:max-w-[550px]">
					<h2 class="pb-6">Наша команда</h2>
					<p class="pb-8">
						Ми складаємося з експертів, які мають глибокий досвід в
						архітектурному проєктуванні, інжинірингу та урбаністиці.
					</p>
				</div>
				<!-- arrows navigation -->
				<div class="flex pb-8 gap-4">
					<img
						src="@/arrows/arrow.svg"
						class="rotate-180 opacity-50"
						alt="arrow"
						id="prev-arrow"
					/>
					<img src="@/arrows/arrow.svg" alt="arrow" id="next-arrow" />
				</div>
			</div>
			<!-- cards container -->
			<Swiper :speed="500" :slides-per-view="'auto'" space-between="30px">
				<SwiperSlide
					v-for="(card, id) in cardsState"
					class="flex w-fit gap-[30px]"
				>
					<Card :data="card" :key="id"></Card>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { NavigationOptions, Swiper as SwiperTypes } from 'swiper/types'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import Card from '../ui/Card.vue'

import img1 from '@/команда/imgteam.jpg'
import img2 from '@/команда/imgteam2.jpg'
import img3 from '@/команда/imgteam3.jpg'
import img4 from '@/команда/imgteam4.jpg'

const cardsState = [
	{
		fullName: 'Ілля Лавренко',
		position: 'Креативний директор',
		img: img1,
	},
	{
		fullName: 'Ілля Лавренко',
		position: 'Креативний директор',
		img: img2,
	},
	{
		fullName: 'Ілля Лавренко',
		position: 'Креативний директор',
		img: img3,
	},
	{
		fullName: 'Ілля Лавренко',
		position: 'Креативний директор',
		img: img4,
	},
]
</script>

<style scoped></style>
