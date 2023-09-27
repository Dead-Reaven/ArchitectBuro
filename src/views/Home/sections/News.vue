<template>
	<section class="section-container overflow-hidden" id="news">
		<Swiper
			:speed="500"
			:slides-per-view="'auto'"
			space-between="24px"
			@swiper="initSwiper"
      class="overflow-visible"
		>
			<SwiperSlide>
				<div
					class="grid max-md:grid-cols-2 md:grid-cols-3 gap-4 max-h-[700px]"
				>
					<!-- news -->
					<div
						class="max-md:col-span-full md:row-span-2 md:pt-20 !text-white py-9 px-5 rounded-[20px]
            bg-gradient-to-tl from-blue-400 to-blue-100
            "
					>
						<p class="caption !text-white pb-3">facebook</p>
						<h2 class="!text-white pb-[25px]">Новини</h2>
						<p class="!text-white pb-9">
							Слідкуйте за нашими новинами у соцмережах.
						</p>
						<button class="btn-primary !bg-white !text-black">
							Приєднатись
						</button>
					</div>
					<!-- gallery -->
					<img
						src="@/новини/Containernews1.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
					<img
						src="@/новини/Containernews2.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
					<img
						src="@/новини/Containernews3.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
					<img
						src="@/новини/Containernews4.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
				</div>
			</SwiperSlide>
      <SwiperSlide>
				<div
					class="grid max-md:grid-cols-2 md:grid-cols-3 gap-4 max-h-[700px]"
				>

					<!-- news -->
					<div
						class="max-md:col-span-full md:row-span-2 md:pt-20 !text-white py-9 px-5 rounded-[20px]
            bg-gradient-to-b from-fuchsia-500 via-red-600 to-orange-300
            "
					>
						<p class="caption !text-white pb-3">instagram</p>
						<h2 class="!text-white pb-[25px]">Події</h2>
						<p class="!text-white pb-9">
							Слідкуйте за нашими подіями у соцмережах.
						</p>
						<button class="btn-primary !bg-white !text-black">
							Приєднатись
						</button>
					</div>
					<!-- gallery -->
					<img
						src="@/новини/Containernews1.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
					<img
						src="@/новини/Containernews2.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
					<img
						src="@/новини/Containernews3.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
					<img
						src="@/новини/Containernews4.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
				</div>
			</SwiperSlide>

      <SwiperSlide>
				<div
					class="grid max-md:grid-cols-2 md:grid-cols-3 gap-4 max-h-[700px]"
				>
					<!-- news -->
					<div
						class="max-md:col-span-full md:row-span-2 md:pt-20 !text-white py-9 px-5 rounded-[20px]
            bg-gradient-to-r from-rose-950 to-pink-600
            "
					>
						<p class="caption !text-white pb-3">youtube</p>
						<h2 class="!text-white pb-[25px]">Контент</h2>
						<p class="!text-white pb-9">
							Слідкуйте за нашими новинами у соцмережах.
						</p>
						<button class="btn-primary !bg-white !text-black">
							Приєднатись
						</button>
					</div>
					<!-- gallery -->
					<img
						src="@/новини/Containernews1.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
					<img
						src="@/новини/Containernews2.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
					<img
						src="@/новини/Containernews3.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
					<img
						src="@/новини/Containernews4.jpg"
						alt="nov"
						class="rounded-[20px] w-full"
					/>
				</div>
			</SwiperSlide>

			<!-- navigation -->
			<div class="flex justify-center gap-4 cursor-pointer pt-9">
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
		</Swiper>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperTypes } from 'swiper/types'

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
</script>
