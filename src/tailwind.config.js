tailwind.config = {
    theme: {
        fontFamily : {
            'sans': ['Barlow', 'sans-serif'],
            'heading': ['Bellefair', 'sans-serif'],
            'sub': ['Barlow Condensed', 'sans-serif'],
        },
        extend: {
            borderWidth: {
              '3': '3px',
            },
            lineHeight: {
                'xxs': '19px',
                'xs': '23px',
                'sm': '25px',
                'md': '34px',
                'lg': '100px',
                'xl': '150px',
                'xxl': '172px',
            },
            letterSpacing: {
                'xs': '1.25px',
                'sm': '2px',
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
                blue: '#d0d6f9',
                dark: '#0b0d17',
            },

        }
    }
}