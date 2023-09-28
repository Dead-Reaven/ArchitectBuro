import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			components: {
				header: () => import('./components/Header.vue'),
				default: () => import('./views/Home/index.vue'),
				footer: () => import('./components/Footer.vue'),
			},
		},
		{
			path: '/projects',
			components: {
				header: () => import('./components/Header.vue'),
				default: () => import('./views/Projects/index.vue'),
			},
		},
	],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
