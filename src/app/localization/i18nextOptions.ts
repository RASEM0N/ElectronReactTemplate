import { defineOptions } from './i18nextDefine';
import { resourcesOptions } from './i18nextResources';
import type { InitOptions } from 'i18next';

export const i18nextOptions: InitOptions = {
	...defineOptions,
	...resourcesOptions,

	interpolation: {
		escapeValue: false,
	},

	debug: __IS_DEV__,
	saveMissing: __IS_DEV__,
	saveMissingTo: 'current',
};
