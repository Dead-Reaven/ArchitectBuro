<script setup lang="ts">
import Clients from './sections/Clients.vue'
import Companies from './sections/Companies.vue'
import Hero from './sections/Hero.vue'
import Info from './sections/Info.vue'
import Order from './sections/Order.vue'
import Services from './sections/Services.vue'
import Team from './sections/Team.vue'
import News from './sections/News.vue'
</script>

<template>
	<main>
		<Hero />
		<Services />
		<Team />
		<Info />
		<Clients />
		<Order />
		<Companies />
		<News />
	</main>
</template>
