import type { ThemeSwapperConfig } from '@/app/themes/types';
import { lightTheme } from './_lightTheme';
import { darkTheme } from './_darkTheme';

export enum THEMES {
	light = 'base',
	dark = 'dark',
}

// https://www.npmjs.com/package/tailwindcss-theme-swapper?activeTab=readme
// Example
// - https://play.tailwindcss.com/jskI9McL20
// - https://play.tailwindcss.com/Gt21fePNvv
export const themesConfig: ThemeSwapperConfig = {
	themes: [
		{
			name: THEMES.light,
			selectors: [':root', `[data-theme="${THEMES.light}"]`],
			theme: lightTheme,
		},
		{
			name: THEMES.dark,
			selectors: [`[data-theme="${THEMES.dark}"]`],
			theme: darkTheme,
		},
	],
};
