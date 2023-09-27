import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Home, Projects } from './views'
import { Footer, Header } from './components'

import App from './App.vue'
import './style.css'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			components: {
				header: Header,
				default: Home,
				footer: Footer,
			},
		},
		{
			path: '/projects',
			components: {
				header: Header,
				default: Projects,
			},
		},
	],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
