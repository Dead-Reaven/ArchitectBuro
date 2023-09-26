<template>
	<section class="section-container overflow-hidden">
		<div>
			<div class="max-w-[622px]">
				<h2 class="pb-6">Наші клієнти розкажуть краще</h2>
				<p class="">
					В партнерстві з нами ви можете бути впевнені, що отримаєте якісне
					обслуговування
				</p>
			</div>
			<Swiper
				:speed="500"
				:slides-per-view="'auto'"
				space-between="24px"
				@swiper="initSwiper"
				class="py-20"
			>
				<SwiperSlide
					v-for="(card, id) in clients"
					class="flex w-fit"
					:key="card.title"
				>
					<ClientCard :client="card" />
				</SwiperSlide>
			</Swiper>
			<!-- navigation -->
			<div class="flex justify-center gap-4 cursor-pointer">
				<img
					src="@/arrows/arrow.svg"
					class="rotate-180"
					:class="{ 'opacity-50': swiperRef?.isBeginning }"
					alt="arrow"
					id="prev-arrow"
					@click="slidePrev"
				/>
				<img
					src="@/arrows/arrow.svg"
					:class="{ 'opacity-50': swiperRef?.isEnd }"
					class=""
					alt="arrow"
					id="next-arrow"
					@click="slideNext"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperTypes } from 'swiper/types'
import ClientCard from '../ui/ClientCard.vue'
import img1 from '@/clients/1.png'
import img2 from '@/clients/2.png'
import img3 from '@/clients/3.png'

const swiperRef = ref<SwiperTypes>()

const initSwiper = (instance: any) => {
	swiperRef.value = instance
}
const slidePrev = () => {
	if (swiperRef.value) swiperRef.value.slidePrev()
}
const slideNext = () => {
	if (swiperRef.value) swiperRef.value.slideNext()
}

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
		title: 'Довгострокова підтримка1',
		body: "Ми проєктуємо ефектні об'єкти, створюючи цілісне містобудівне середовище",
		src: img3,
		stars: 5,
	},
	{
		title: 'Довгострокова підтримка2',
		body: "Ми проєктуємо ефектні об'єкти, створюючи цілісне містобудівне середовище",
		src: img3,
		stars: 5,
	},
	{
		title: 'Довгострокова підтримка3',
		body: "Ми проєктуємо ефектні об'єкти, створюючи цілісне містобудівне середовище",
		src: img3,
		stars: 5,
	},
	{
		title: 'Довгострокова підтримка4',
		body: "Ми проєктуємо ефектні об'єкти, створюючи цілісне містобудівне середовище",
		src: img3,
		stars: 5,
	},
]
</script>
