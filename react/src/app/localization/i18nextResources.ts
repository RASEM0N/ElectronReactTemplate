import type { InitOptions } from 'i18next';
import { Languages } from './i18nextDefine';

export const resourcesOptions: InitOptions = {
	backend: {
		loadPath: `${__PUBLIC_PATH__}/locales/{lng}}/{{ns}}.json`,
		addPath: `${__PUBLIC_PATH__}/locales/{lng}}/{{ns}}.missing.json`,
		jsonIndent: 2,
	},

	preload: [Languages.RU, Languages.EN],
	ns: ['common'],
};
