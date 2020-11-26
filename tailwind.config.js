module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
    theme: {
        fontSize : {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl' : '6rem'
        },
        extend: {
            colors: {
                'light-blue': {
                    '50': '#f0f9ff',
                    '100': '#e0f2fe',
                    '200': '#bae6fd',
                    '300': '#7dd3fc',
                    '400': '#38bdf8',
                    '500': '#0ea5e9',
                    '600': '#0284c7',
                    '700': '#0369a1',
                    '800': '#075985',
                    '900': '#0c4a6e',
                }
            }
        },
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
        translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        display: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        animation: ['responsive', 'hover', 'focus','group-hover'],
    },

    plugins: [require('@tailwindcss/ui'),require('@tailwindcss/custom-forms')],
}
