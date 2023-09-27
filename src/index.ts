import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Home, About } from './views'
import App from './App.vue'
import './style.css'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Home },
		{ path: '/about', component: About },
	],
})

const app = createApp(App)
app.use(router)

app.mount('#app')
