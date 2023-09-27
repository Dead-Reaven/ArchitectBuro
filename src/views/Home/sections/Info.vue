<template>
	<section class="relative max-md:h-[812px] md:h-[536px]">
		<!-- src="@/info.jpg" -->
		<div
			class="absolute bg-[url('@/info.jpg')] z-0 bg-cover bg-center w-full h-full xl:bg-top"
		/>

		<div class="section-container h-full">
			<div
				class="z-10 flex max-md:flex-col items-center justify-between gap-5 w-full h-full"
			>
				<InfoBlock
					v-for="info in [
						{ text: 'Проєктів', count: 80, interval: 15 },
						{ text: 'Експертів', count: 100, interval: 15 },
						{ text: 'Клієнтів', count: 500, interval: 1 },
					]"
					:text="info.text"
					:count="info.count"
					:speedInterval="info.interval"
					:key="info.text"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import InfoBlock from '$/InfoBlock.vue'
</script>
