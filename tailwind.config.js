import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				primary: 'rgb(242, 63, 38)',
				secondary: 'rgb(255, 232, 232)',
				'gray-50': '#777E90',
				'gray-100': '#4D4D4D',
				white: '#FCFCFD',
				gray: '#E6E8EC',
				black: '#23262F',
				'blue-30': '#F1F3FC',
				'body-text': '#4D4D4D',
				'info-block': 'rgba(89, 115, 255, 0.17)',
			},
			height: {
				'header-md': '88px',
				'header-lg': '115px',

				'hero-full': "calc(100vh - theme('height.header-md'))",
				'hero-full-lg': "calc(100vh - theme('height.header-lg'))",
			},
			boxShadow: {
				'inner-blue':
					'-11.30564px 11.30564px 11.30564px 0px rgba(255, 255, 255, 0.10) inset',
				'inner-gray':
					'11.30564px -11.30564px 11.30564px 0px rgba(194, 194, 194, 0.10) inset',
				'client-card-hover': '-24px 64px 41px -19px rgba(15,15,15,0.1)',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: 'calc(5vw)',
				content: '0px',
			},
			screens: {
				content: '1120px',
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
