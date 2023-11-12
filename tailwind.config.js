/** @type {import('tailwindcss').Config} */
export default {
	content: ['*.html'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#39B6A9',

					secondary: '#D48EC0',

					accent: '#96B1AC',

					neutral: '#334B48',

					'base-100': '#292524',

					info: '#9C5B8A',

					success: '#29a387',

					warning: '#c09a11',

					error: '#ec3f3c',
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
