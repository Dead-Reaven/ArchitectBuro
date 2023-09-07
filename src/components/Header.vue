<script setup lang="ts">
import { ref } from 'vue'
const isBurgerOpened = ref<boolean>(false)
const toggleIsBurgerOpened = () =>
	(isBurgerOpened.value = !isBurgerOpened.value)
</script>

<template>
	<header
		class="relative container flex items-center py-4 z-10 lg:py-0 lg:h-[115px]"
	>
		<img src="@/хеадер/header.svg" alt="logo" class="w-[48px] h-[36px]" />

		<nav class="h-full lg:mx-auto"  :hidden="isBurgerOpened">
			<ul
				class="flex flex-col gap-7 p-7 absolute top-[85px] right-10 bg-white rounded-xl
				lg:static lg:flex-row lg:bg-transparent lg:h-full lg:py-0 lg:gap-0"
			>
				<li
					v-for="el in ['Про нас', 'Проєкти', 'Послуги', 'Новини', 'Контакти']"
					class="cursor-pointer
					items-center lg:h-[115px] lg:flex lg:p-10 lg:border-r lg:border-r-[#E6E8EC]  "
				>
					<!-- border-t-slate-500 border-t	lg:border-t-0 lg:border-x-[1px] lg:border-red-400 -->
					{{ el }}
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
