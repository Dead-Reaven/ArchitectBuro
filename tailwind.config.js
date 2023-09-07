import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				primary: 'rgb(242, 63, 38)',
				secondary: 'rgb(255, 232, 232)',
				disabled: '#777E90',
				white: '#FCFCFD',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: 'calc(5vw)',
				content: '40px',
			},
			screens: {
				content: '1160px',
			},
		},
		maxWidth: {
			content: '1120px',
			container: '1440px',
		},
		screens: {
			sm: '393px',
			md: '768px',
			lg: '1120px',
			xl: '1440px',
		},
	},
}
