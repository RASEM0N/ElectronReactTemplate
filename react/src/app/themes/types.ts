export interface ThemeSwapperConfig {
	themes: ThemeConfig[];
}

export interface ThemeConfig {
	name: string;
	selectors: string[];
	mediaQuery?: string;
	theme: ThemeVariables;
}

export interface ThemeVariables {
	colors: ThemeColors;
	spacing?: ThemeSpacing;
}

export interface ThemeSpacing {}

export interface ThemeColors {}
