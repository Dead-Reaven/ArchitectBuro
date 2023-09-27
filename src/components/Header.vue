<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Select from './ui/Select.vue'

const isBurgerOpened = ref<boolean>(window.innerWidth >= 1120)

const handleResize = () => {
	// console.log('resize')
	isBurgerOpened.value = window.innerWidth >= 1120
}

onMounted(() => addEventListener('resize', () => handleResize()))
// onUnmounted(() => removeEventListener('resize', handleResize))

const toggleIsBurgerOpened = () => {
	if (window.innerWidth < 1120) isBurgerOpened.value = !isBurgerOpened.value
}

const items = [
	{
		title: 'Про нас',
		href: '/#team'
	},
	{
		title: 'Проєкти',
		href: '/projects',
	},
	{
		title: 'Послуги',
		href: '/#service'
	},
	{
		title: 'Новини',
		href: '/#news'
	},
	{
		title: 'Контакти',
		href: '/#contacts'
	},
]
</script>

<template>
	<header
		class="container relative z-10 flex items-center py-4 h-header-md lg:py-0 lg:h-header-lg"
	>
		<router-link to="/">
			<img src="@/хеадер/header.svg" alt="logo" class="w-[48px] h-[36px]" />
		</router-link>

		<nav class="h-full lg:mx-auto" :hidden="!isBurgerOpened">
			<ul
				class="flex flex-col absolute top-[85px] right-10 bg-white rounded-xl lg:static lg:flex-row lg:bg-transparent lg:p-7 lg:h-full lg:py-0 lg:gap-0"
			>
				<li
					v-for="item in items"
					class="items-center lg:flex hover:bg-blue-30 max-lg:border-t border-t-gray lg:border-r lg:border-r-gray first:border-t-0"
					@click="toggleIsBurgerOpened"
				>
					<Select :item="item" />
				</li>
			</ul>
		</nav>
		<button class="mx-auto btn-primary lg:mx-0">
			<a href="#">Замовити послугу</a>
		</button>
		<!-- burger btn -->
		<button class="cursor-pointer lg:hidden" @click="toggleIsBurgerOpened">
			<img
				src="@/хеадер/icoBurger.svg"
				alt="burger"
				class="w-[32px] h-[32px]"
			/>
		</button>
	</header>
</template>

<style lang="css" scoped></style>
