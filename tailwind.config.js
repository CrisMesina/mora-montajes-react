import daisyui from 'daisyui'
import animations from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
	'.node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
			height: {
				'xxl': '547px',
				'grande':'1750px',
				'900':'900px'
			},
			screens:{
				'ms': '350px',
			},
			width:{
				'telefono': '445px',
				'mediano': '870px',
				'pantalla':'1303px',
				'mitad': '652px',
				'500':'500px',
				'1000':'1000px',
				'547':'547px',

			},
			colors:{
				'plomito':'#262625',
				'plomitoxd': '#363633',
				'negro': '#414133'
			},
			spacing:{
			'22' : '85px',
			'23': '90px'
			}
		},
  },
  plugins: [
    require('flowbite/plugin'),animations, daisyui
  ],
}

