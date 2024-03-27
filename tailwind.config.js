// noinspection ES6PreferShortImport

import themeSwapper from 'tailwindcss-theme-swapper';
import { themesConfig } from './src/app/themes/config';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{jsx,tsx}'],
	plugins: [themeSwapper(themesConfig)],
};
