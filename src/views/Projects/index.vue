<template>
	<main>
		<section class="section-container">
			<div class="lg:flex">
				<h2 class="lg:w-1/2 max-lg:pb-6">
					Наші проєкти - це поєднання досвіду та інновацій
				</h2>
				<p class="lg:w-1/2">
					Наша команда здійснює втілення амбітних проєктних ідей у реальність.
					Ми розглядаємо архітектуру як унікальний продукт, створений на злитті
					духу часу, прогресу інженерної думки та інноваційних будівельних
					матеріалів. Наше проєктування спрямоване на створення вражаючих
					об'єктів, які вписуються в цілісне містобудівне середовище. Ми глибоко
					відчуваємо потреби замовника та перетворюємо майбутнє на реальність.
				</p>
			</div>
		</section>
		<section class="max-w-content mx-auto">
			<div class="hero-text bg-blue-30 py-8 px-6">Архітектура</div>
			<div
				class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col lg:grid-cols-6 lg:grid-rows-1 lg:grid-flow-row"
			>
				<img class="md:col-span-3" src="@/слайдер/image hero1.jpg" alt="hero" />
				<img src="@/Проєкти/арх-ра/1.jpg" alt="1" />
				<img src="@/Проєкти/арх-ра/2.jpg" alt="1" />
				<img src="@/Проєкти/арх-ра/3.jpg" alt="1" />
			</div>

			<div class="hero-text bg-blue-30 py-8 px-6">
				Дизайн і проєктування інтер’єрів
			</div>
			<div
				class="grid grid-cols-3 lg:grid-cols-6 lg:grid-rows-1 lg:grid-flow-row"
			>
				<img src="@/Проєкти/дизайн/1.jpg" alt="1" />
				<img src="@/Проєкти/дизайн/2.jpg" alt="1" />
				<img src="@/Проєкти/дизайн/3.jpg" alt="1" />
				<img class="col-span-3" src="@/Проєкти/дизайн/4.png" alt="1" />
			</div>
			<div class="hero-text bg-blue-30 py-8 px-6">Реконструкція будівель</div>
			<div
				class="grid grid-cols-3 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col lg:grid-cols-6 lg:grid-rows-1 lg:grid-flow-row"
			>
				<img class="col-span-3" src="@/Проєкти/реконструкція/1.jpg" alt="1" />
				<img src="@/Проєкти/реконструкція/2.png" alt="1" />
				<img src="@/Проєкти/реконструкція/3.png" alt="1" />
				<img src="@/Проєкти/реконструкція/4.png" alt="1" />
			</div>
		</section>
	</main>
</template>

<script setup lang="ts"></script>

<style scoped>
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}
.hero-text {
	color: #23262f;
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px; /* 100% */
	text-transform: uppercase;
}
</style>
