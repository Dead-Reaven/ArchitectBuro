<script setup lang="ts">
import { ref } from 'vue'
import Select from './ui/Select.vue'

const isBurgerOpened = ref<boolean>(false)
const toggleIsBurgerOpened = () =>
	(isBurgerOpened.value = !isBurgerOpened.value)

const items = [
	{
		title: 'Про нас',
		menu: [
			{ label: 'Architect', href: '#' },
			{ label: 'design', href: '#' },
		],
	},
	{
		title: 'Проєкти',
		menu: [
			{ label: 'Architect', href: '#' },
			{ label: 'design', href: '#' },
		],
	},
	{
		title: 'Послуги',
		menu: [
			{ label: 'Architect', href: '#' },
			{ label: 'design', href: '#' },
		],
	},
	{
		title: 'Новини',
		menu: [
			{ label: 'Architect', href: '#' },
			{ label: 'design', href: '#' },
		],
	},
	{
		title: 'Контакти',
		menu: [
			{ label: 'Architect', href: '#' },
			{ label: 'design', href: '#' },
		],
	},
]
</script>

<template>
	<header
		class="relative container flex items-center py-4 z-10 h-header-md lg:py-0 lg:h-header-lg"
	>
		<img src="@/хеадер/header.svg" alt="logo" class="w-[48px] h-[36px]" />

		<nav class="h-full lg:mx-auto" :hidden="isBurgerOpened">
			<ul
				class="flex flex-col absolute top-[85px] right-10 bg-white rounded-xl lg:static lg:flex-row lg:bg-transparent lg:p-7 lg:h-full lg:py-0 lg:gap-0"
			>
				<li
					v-for="{ title, menu } in items"
					class="hover:bg-blue-30 p-10 cursor-pointer items-center max-lg:border-t border-t-gray lg:flex lg:border-r lg:border-r-gray first:border-t-0"
				>
					<Select :title="title" :menu="menu" />
				</li>
			</ul>
		</nav>
		<button class="btn-primary mx-auto lg:mx-0">
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
