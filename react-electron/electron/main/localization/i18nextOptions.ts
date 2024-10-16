import type { InitOptions } from 'i18next';
import { ENVS } from '../const/process';
import { options } from './i18nextDefine';

export const i18nextOptions: InitOptions = {
	...options,

	interpolation: {
		escapeValue: false,
	},

	backend: {
		loadPath: `${ENVS.PUBLIC_PATH}/locales/{lng}}/{{ns}}.json`,
		addPath: `${ENVS.PUBLIC_PATH}/locales/{lng}}/{{ns}}.missing.json`,
		jsonIndent: 2,
	},

	saveMissing: ENVS.IS_DEV,
	saveMissingTo: 'current',
};
