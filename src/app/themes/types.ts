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
}
