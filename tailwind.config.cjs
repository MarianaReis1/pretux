
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,vue}'],
	theme: {

		screens: {
			'2xl': {'max': '1200px'},
			'xl': {'max': '1024px'},
			'lg': {'max': '960px'},
			'md': {'max': '767px'},
			'xs': {'max': '500px'},
		},

		fontSize: {
			'xxs': '.75rem', // 12px
			'xs': '.875rem', // 14px
			'sm': '1rem', // 16px
			'base': '1.125rem', // 18px
			'lg': '1.25rem', // 20px
			'2xl': '1.375rem', // 22px
			'3xl': '1.4375rem', // 23px
			'4xl': '1.5rem', // 24px
			'6xl': '1.625rem', // 26px
			'8xl': '2.25rem', // 38px
			'9xl': '2.5rem', // 40px
		},

		fontFamily: {
			'body': ['Montserrat', 'sans-serif'],
			'display': ['Open Sans', 'sans-serif'],
			'heading': ['Inter', 'sans-serif'],
		},

		extend: {

			colors: {
				black: {
					400: '#212121',
					600: '#2B2B2B',
					800: '#404040'
				},

				brown: {
					400: '#E8DAB2'
				}
			},

			spacing: {
				22: '5.625rem', // 90px
				26: '100px',
			}

		},
	},

	plugins: [],
}
