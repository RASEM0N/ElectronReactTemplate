import type { ThemeSwapperConfig } from './types';
import { theme as lightTheme } from './themes/light';
import { theme as darkTheme } from './themes/dark';

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
			selectors: [':root'],
			theme: lightTheme,
		},
		{
			name: THEMES.dark,
			selectors: [`[data-theme="dark"]`],
			mediaQuery: '@media (prefers-color-scheme: dark)',
			theme: darkTheme,
		},
	],
};
