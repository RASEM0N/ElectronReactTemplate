import type { InitOptions } from 'i18next';
import { Languages } from './i18nextDefine';

/** translations **/
import enCommon from '~/locales/en-US/common.json';
import ruCommon from '~/locales/ru-RU/common.json';

/* Пока что как то так. Лучше конечно через Electron получать это */
export const resourcesOptions: InitOptions = {
	// backend: {
	// 	loadPath: `${__PUBLIC_PATH__}/locales/{lng}}/{{ns}}.json`,
	// 	addPath: `${__PUBLIC_PATH__}/locales/{lng}}/{{ns}}.missing.json`,
	// 	jsonIndent: 2,
	// },

	// preload: [Languages.RU, Languages.EN],
	// ns: ['common'],

	resources: {
		[Languages.RU]: {
			common: ruCommon,
		},
		[Languages.EN]: {
			common: enCommon,
		},
	},
};
