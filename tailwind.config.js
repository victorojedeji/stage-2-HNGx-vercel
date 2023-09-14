/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme') 

module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    fontFamily: {
      'DMsans': ['DM Sans', 'sans-serif'],
    },
    fontSize: {
      'text-xs': ['0.75rem', {
        lineHeight: '1rem',
        // letterSpacing: '-0.112895em',
        // fontWeight: '600',
      }],
      'sm': ['0.875rem', {
        lineHeight: '1.25rem',
      }],
      'base': ['1rem', {
        lineHeight: '1.5rem',
      }],
      'lg': ['1.125rem', {
        lineHeight: '1.75rem',
      }],
      'xl': ['1.5rem', {
        lineHeight: '1.75rem',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '2.9rem',
      }],
      '5xl': ['3rem', {
        lineHeight: '3.5rem',
      }],
      '6xl': ['3.75rem', {
        lineHeight: '3.75rem',
      }],
      '7xl': ['4.5rem', {
        lineHeight: '4.5rem',
      }],
      '8xl': ['6rem', {
        lineHeight: '6rem',
      }],
      '9xl': ['8rem', {
        lineHeight: '8rem',
      }],
    },
    extend: {
      colors: {
        'gray-900': '#111827',
        'gray-800': '#1F2937',
        'gray-700': '#374151',
        'gray-600': '#4B5563',
        'gray-500': '#6B7280',
        'gray-400': '#9CA3AF',
        'gray-300': '#D1D5DB',
        'gray-200': '#E5E7EB',
        'gray-100': '#F3F4F6',
        'gray-50': '#F9FAFB',
        'red-900': '#7F1D1D',
        'red-800': '#991B1B',
        'red-700': '#B91C1C',
        'red-600': '#DC2626',
        'red-500': '#EF4444',
        'red-400': '#F87171', 
        'red-300': '#FCA5A5',
        'red-200': '#FECACA',
        'red-100': '#FEE2E2',
        'red-50': '#FEF2F2',
      },
      fontFamily: {
        'sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}