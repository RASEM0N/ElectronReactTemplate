import type { InitOptions } from 'i18next';

export enum Languages {
	RU = 'ru-RU',
	EN = 'en-US',
}

export const defineOptions: InitOptions = {
	defaultNS: Languages.RU,
	fallbackLng: Languages.RU,

	supportedLngs: Object.values(Languages),
};
