/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './*.html',
      './src/**/*.{html,js,ts,jsx,tsx}',
    ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'vibrant-blue': '#007bff',
        'vibrant-purple': '#9b5de5',
        'vibrant-pink': '#ff006e',
        'vibrant-orange': '#ffbe0b',
        'vibrant-green': '#00f5d4', // Updated to pastel green
        'vibrant-yellow': '#ffde7d',
        'dark-gray': '#373737',
        'light-gray': '#eeeeee', // Light grey for background
        'white': '#ffffff',
        'black': '#000000',
        'card-bg': '#ffffff', // Card background
        'card-border': '#e5e7eb', // Card border
        'card-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)', // Card shadow
        'text-dark': '#1a202c', // Dark text color for better readability
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        transitionProperty: {
          'width': 'width',
          'spacing': 'margin, padding',
        },
        transformOrigin: {
          'center-left': 'center left',
        },
        scale: {
          '102': '1.02', // Slight scale increase on hover
        },
        boxShadow: {
          'card-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow for cards
        },
      },
    },
    plugins: [],
  };
  