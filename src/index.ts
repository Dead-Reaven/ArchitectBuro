import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { About, Main } from './components'
import App from './App.vue'
import './style.css'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Main },
		{ path: '/about', component: About },
	],
})

const app = createApp(App)
app.use(router)

app.mount('#app')
