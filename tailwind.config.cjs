
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,vue}'],
	theme: {

		screens: {
			'5xl': {'max': '1260px'},
			'3xl': {'max': '1150px'},
			'xl': {'max': '1024px'},
			'lg': {'max': '960px'},
			'md': {'max': '767px'},
			'xs': {'max': '500px'},
		},

		fontSize: {
			'xxs': '.75rem', // 12px
			'xs': '.875rem', // 14px
			'base': '1rem', // 16px
			'md': '1.125rem', // 18px
			'lg': '1.25rem', // 20px
			'2xl': '1.375rem', // 22px
			'3xl': '1.4375rem', // 23px
			'4xl': '1.5rem', // 24px
			'6xl': '1.625rem', // 26px
			'7xl': '2rem', // 32px
			'8xl': '2.25rem', // 38px
			'9xl': '2.5rem', // 40px
			'10xl': '3rem', // 48px
		},

		fontFamily: {
			'body': ['Montserrat', 'sans-serif'],
			'display': ['Open Sans', 'sans-serif'],
			'heading': ['Inter', 'sans-serif'],
		},

		extend: {

			colors: {
				black: {
					DEFAULT: '#000000',
					400: '#212121',
					600: '#2B2B2B',
					700: '#C4C4C4',
					800: '#404040'
				},

				brown: {
					400: '#E8DAB2'
				}
			},

			dropShadow: {
				'3xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
			},

			spacing: {
				7.5: '1.875rem', // 30px
				13: '3.125rem', // 90px
				22: '5.625rem', // 90px
				26: '6.25rem', // 100px
			},

			gridTemplateColumns: {
				'autofit' : 'repeat(auto-fill, minmax(200px, 1fr))'
			}

		},
	},

	plugins: [],
}
