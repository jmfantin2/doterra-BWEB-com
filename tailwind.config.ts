import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [daisyui, typography],
  daisyui: {
    // Light & dark themes are added by default (it switches automatically based on OS settings)
    // You can add another theme among the list of 30+
    // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
    // https://daisyui.com/
    themes: [
      //'retro', //comment to deactivate
      {
        mytheme: {
          'primary': '#0876ec', // Bright blue for primary buttons and links
          'secondary': '#7b3fe4', // Vibrant purple for accents
          'accent': '#ac4ec3', // A pinkish purple to complement the blue and purple
          'neutral': '#f5f5f5', // Light gray neutral for backgrounds and cards
          'base-100': '#ffffff', // White base for the main background
          'base-200': '#f0f0f0', // Light gray base for sections and containers
          'base-300': '#e0e0e0', // Slightly darker gray for borders and dividers
          'info': '#3b3b3b', // Darker gray for informational text
          'success': '#28a745', // Fresh green for success messages
          'warning': '#ffc107', // Bright yellow for warnings
          'error': '#ff4444', // Strong red for error messages
        },
      },
    ],
  },
} satisfies Config;
