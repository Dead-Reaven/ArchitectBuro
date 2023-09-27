import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Home, Projects } from './views'
import App from './App.vue'
import './style.css'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Home },
		{ path: '/projects', component: Projects },
	],
})

const app = createApp(App)
app.use(router)

app.mount('#app')
