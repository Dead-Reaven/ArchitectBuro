<template>
	<section class="section-container">
		<div class="flex max-md:flex-col gap-6">
			<h2 class="md:w-1/2">
				Архітектура це простір для реалізації наших творчих і інноваційних
				задумів.
			</h2>
			<p class="md:w-1/2">
				Наша команда здійснює втілення амбітних проєктних ідей у реальність. Ми
				розглядаємо архітектуру як унікальний продукт, створений на злитті духу
				часу, прогресу інженерної думки та інноваційних будівельних матеріалів.
				Наше проєктування спрямоване на створення вражаючих об'єктів, які
				вписуються в цілісне містобудівне середовище. Ми глибоко відчуваємо
				потреби замовника та перетворюємо майбутнє на реальність.
			</p>
		</div>
		<div class="flex max-lg:flex-col gap-6">
			<transition
				name="fade"
				mode="out-in"
				@before-leave="beforeLeave"
				@after-enter="afterEnter"
			>
				<img
					v-if="currentImgService"
					:key="currentImgService"
					:src="currentImgService"
					class="w-full object-cover lg:pt-0 max-lg:aspect-video lg:min-w-[50%] lg:max-h-[440px] lg:h-[440px]"
				/>
			</transition>
			<div class="flex flex-col gap-y-[32px] lg:min-w-[50%]">
				<h2>Нащі послуги</h2>
				<Details
					v-for="({ isOpened, text, title }, index) in state"
					:text="text"
					:title="title"
					:is-open="isOpened"
					:index="index"
					:toggle-state="toggleState"
					:key="index"
				/>
			</div>
		</div>
		<button class="btn-primary w-fit mx-auto">Замовити послугу</button>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Details from '../ui/Details.vue'
import img1 from '@/послуги/imageservices1.jpg'
import img2 from '@/послуги/imageservices2.jpg'
import img3 from '@/послуги/imageservices3.jpg'

const state = ref([
	{
		isOpened: true,
		title: 'Архітектура',
		text: 'Наша компанія має значний досвід та має бездоганну репутацію на ринку нерухомості. Наша діяльність охоплює широкий спектр завдань, включаючи розробку проєктно-кошторисної документації, а також здійснення ролі генерального проєктувальника для житлових комплексів та різноманітних будівель громадського, комерційного та промислового призначення.',
		img: img1,
	},
	{
		isOpened: false,
		title: 'Дизайн і проєктування інтер’єрів',
		text: "Основу нашої діяльності складає бажання завжди бути в курсі новацій та сучасних тенденцій у дизайні в архітектурі. Ми пропонуємо проектування інтер'єру, яке допомагає створити атмосферу затишку та комфорту, підвищити настрій і виділитися серед інших просторів. Наша компанія пропонує сучасні концепції дизайну інтер'єру, що охоплюють різноманітні стилі, ідеї та напрями.",
		img: img2,
	},
	{
		isOpened: false,
		title: 'Реконструкція будівель',
		text: 'Наші послуги охоплюють реконструкцію будівель різних типів та приміщень, незалежно від їхньої початкової призначеності та рівня зношеності. Більше того, ми маємо можливість провести повну трансформацію будівлі, що дозволить надати їй новий зовнішній вигляд і значно покращити експлуатаційні характеристики.',
		img: img3,
	},
])
const currentImgService = ref(state.value[0].img)
const setCurrentImgService = (index: number) => {
	currentImgService.value = state.value[index].img
}

const toggleState = (index: number) => {
	state.value = state.value.map((el, idx) => {
		if (idx === index) setCurrentImgService(index)
		return {
			...el,
			isOpened: index === idx,
		}
	})
}
// animation fade for img
const beforeLeave = (el: any) => {
	el.style.transition = 'opacity 0.3s' // Fade out duration
	el.style.opacity = '0'
}

const afterEnter = (el: any) => {
	el.style.transition = 'opacity 1s' // Fade in duration
	el.style.opacity = '1'
}
</script>
<style scoped>
.fade-leave-active {
	transition: opacity 3s; /* Fade out duration */
}
.fade-enter-active {
	transition: opacity 0s; /* Fade in duration */
	opacity: 0;
}
</style>
