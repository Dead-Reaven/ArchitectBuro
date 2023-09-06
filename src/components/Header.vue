<script setup lang="ts">
import { ref } from 'vue'
const isBurgerOpened = ref<boolean>(false)
</script>

<template>
	<header
		class="container h-[68px] flex justify-between items-center relative z-10"
	>
		<img src="@/хеадер/header.svg" alt="logo" class="w-[48px] h-[36px]" />
		<input
			id="burger-btn"
			type="checkbox"
			v-model="isBurgerOpened"
			:hidden="true"
		/>
		<a href="#" class="btn-primary">Замовити послугу</a>
		<nav class="absolute w-screen left-0 top-0" :hidden="true">
			<ul
				class="flex flex-col gap-7 p-7 w-full absolute top-16 max-w-content bg-orange-200"
			>
				<li
					v-for="el in ['Проєкти', 'Послуги', 'Новини', 'Контакти']"
					class="border-t-slate-500 border-t-[1px] mx-auto cursor-pointer"
				>
					{{ el }}
				</li>
			</ul>
		</nav>

		<label for="burger-btn" class="cursor-pointer">
			<img
				src="@/хеадер/icoBurger.svg"
				alt="burger"
				class="w-[32px] h-[32px]"
			/>
		</label>
	</header>
</template>

<style lang="css" scoped></style>
