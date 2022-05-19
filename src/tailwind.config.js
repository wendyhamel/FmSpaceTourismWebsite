tailwind.config = {
    theme: {
        fontFamily : {
            'sans': ['Barlow', 'sans-serif'],
            'heading': ['Bellefair', 'sans-serif'],
            'sub': ['Barlow Condensed', 'sans-serif'],
        },
        extend: {
            spacing: {
                '123': '123px',
                '150': '150px',
                '170': '170px',
                '165': '165px',
                '242': '242px',
                '274': '274px'
            },
            borderWidth: {
              '3': '3px',
            },
            fontSize: {
                '15': '15px',
                '28': '28px',
                '32': '32px',
                '40': '40px',
                '56': '56px',
                '80': '80px',
                '100': '100px',
                '150': '150px',
            },
            lineHeight: {
                '17': '17px',
                'xxs': '19px',
                'xs': '23px',
                'sm': '25px',
                'md': '34px',
                '46': '46px',
                '65': '65px',
                '92': '92px',
                '115': '115px',
                'lg': '100px',
                'xl': '150px',
                'xxl': '172px',
            },
            letterSpacing: {
                'xxs': '1.25px',
                'xs': '2px',
                'sm': '2.36px',
                'md': '2.7px',
                'lg': '3.38px',
                'xl': '4.73px',
            },
            backdropSaturate: {
                '125': '1.25',
            },
            backdropBlur: {
                '30': '30px',
            },
            opacity: {
              '4': '.04',
            },
            width: {
                menu: '254px'
            },
            colors: {
                white: '#ffffff',
                gray: '#383B4B',
                blue: '#d0d6f9',
                dark: '#0b0d17',
            },
            animation: {
                'destination-image': 'destination-image 1000ms ease-out',
                'fade': 'fade 750ms ease-out',
            },
            keyframes: {
                'destination-image': {
                    '0%': { opacity: '0%', transform: 'scale(.9) rotate(8deg)'},
                    '100%': { opacity: '100%', transform: 'scale(1) rotate(0)'}
                },
                'fade': {
                    '0%': { opacity: '0%', transform: 'scale(.9)'},
                    '100%': { opacity: '100%', transform: 'scale(1)'}
                }
            }
        }
    }
}