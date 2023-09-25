<template>
	<section class="section-container overflow-hidden">
		<div class="max-w-[622px]">
			<h2 class="pb-6">Наші клієнти розкажуть краще</h2>
			<p class="pb-8">
				В партнерстві з нами ви можете бути впевнені, що отримаєте якісне
				обслуговування
			</p>
		</div>
		<Swiper :speed="500" :slides-per-view="'auto'" space-between="30px">
			<SwiperSlide
				v-for="(card, id) in clients"
				class="flex w-fit gap-[30px]"
				:key="card.title"
			>
				<ClientCard :client="card" />
			</SwiperSlide>
		</Swiper>
		<!-- navigation -->
	</section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import ClientCard from '../ui/ClientCard.vue'
import img1 from '@/clients/1.png'
import img2 from '@/clients/2.png'
import img3 from '@/clients/3.png'

const clients = [
	{
		title: 'Професійний рівень',
		body: 'Дякую експертам, які мають глибокий досвід в архітектурному проєктуванні, інжинірингу та урбаністиці.',
		src: img1,
		stars: 5,
	},
	{
		title: 'Якісне обслуговування',
		body: 'Дякую за досвід і прагнення перевершити досягнення вітчизняної будівельної індустрії  за вражаючу архітектуру.',
		src: img2,
		stars: 5,
	},
	{
		title: 'Довгострокова підтримка',
		body: "Ми проєктуємо ефектні об'єкти, створюючи цілісне містобудівне середовище",
		src: img3,
		stars: 5,
	},
]
</script>
