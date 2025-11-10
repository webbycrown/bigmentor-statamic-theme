/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './content/**/*.md',
    './public/**/*.html',
  ],
  theme: {
    extend: {
        boxShadow: {
            'custom-text': '2px 0 #2251FF, -2px 0 #2251FF, 0 2px #2251FF, 0 -2px #2251FF, 1px 1px #2251FF, -1px -1px #2251FF, 1px -1px #2251FF, -1px 1px #2251FF',
        },
        backgroundImage: {
            'custom-gradient-300': 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.76) 100%)',
            'custom-gradient-200': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.8) 100%)',
            'custom-gradient-100': 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.65) 60%, rgba(0, 0, 0, 0.8) 100%)',
        },
        minWidth: {
            200: '200px',
            885: '885px',
        },
        height: {
            '4/6': '66.666667%',
        },
        colors: {
            vividblue: { 400: '#2251FF' },
            yellow: { custom: '#FCD53F' },
            white: { DEFAULT: '#ffffff', 100: '#FFFFFF80' },
            lightborder: { 100: '#FFFFFF2E' },
            gray: {
                200: '#f2f2f2',
                600: '#494949fc',
                700: '#E5E5E5',
                800: '#585858',
                900: '#646464',
            },
            red: { 500: '#EF4444' },
        },
        screens: {
            '2xl-custom': '1480px', // custom breakpoint
            '2xl': '1480px',
        },
        fontSize: {
            '4xl': ['55px', '2.5rem'], // first is font-size, second is line-height
            '2xl': '1.5rem',
            xl: '1.25rem',
            lg: '1.125rem',
            md: '1rem',
            sm: '0.875rem',
            xs: '0.75rem',
            13: '13px',
            15: '15px',
            16: '16px', // text-md
            18: '18px', // text-lg
            20: '20px',
            22: '22px',
            25: '25px',
            28: '28px',
            30: '30px', // text-xl
            32: '32px',
            40: '40px', // text-3xl
            45: '45px',
            70: '70px', // text-6xl
            0: '0',
        },
        transitionDuration: {
            150: '150ms', // for .duration-150
            500: '500ms', // for .duration-500
            300: '300ms',
        },
        lineHeight: {
            lineHeight: 'calc(100% + 10px)',
            none: '1',
        },
        letterSpacing: {
            '0.02em': '0.02em',
            wide: '0.025em',
            wider: '0.05em',
        },
        zIndex: {
            30: '30',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                lg: '2rem',
                xl: '3rem',
                '2xl': '4rem',
            },
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        textTransform: {
            uppercase: 'uppercase',
        },
        opacity: {
            0: '0',
            50: '0.5',
        },
        height: {
            '1/2': '50%',
            '2/6': '33.333333%',
            '4/6': '66.666667%',
            '80': '20rem',
        },
        width: {
            '1/2': '50%',
        },
        borderRadius: {
            full: '9999px',
        },
        keyframes: {
            'preloader-fx': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(-360deg)' },
          },
      },
      animation: {
        'preloader-spin': 'preloader-fx 1.6s linear infinite',
      },
    },
},
plugins: [
    function ({ addVariant, addUtilities, addComponents }) {
        addVariant('before', '&::before');
        addVariant('after', '&::after');
        addUtilities({
    // Positioning
            '.before-absolute': { position: 'absolute' },
            '.before-block': { display: 'block' },
            '.before-top-0': { top: '0' },
            '.before-top-50p': { top: '50%' },
            '.before-bottom-0': { bottom: '0' },
            '.before-left-0': { left: '0' },
            '.before-right-0': { right: '0' },

    // Z-index
            '.before-z-1': { zIndex: '1' },
            '.before-z-10': { zIndex: '10' },

    // Transform

        });
    },
    require('@tailwindcss/typography'),
],
};
