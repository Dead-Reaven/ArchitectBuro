import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	base: './',
	// assetsInclude: './public',
	plugins: [vue()],
	resolve: {
		alias: {
			'@': '/public/assets', // Use '@/' as an alias for the '/assets' directory
			'$': '/src/components/ui'
		},
	},
})
