import i18next from 'i18next';
import i18nextBackend from 'i18next-fs-backend';
import i18nextDetector from 'i18next-browser-languagedetector';
import { i18nextOptions } from './i18nextOptions';
import log from 'electron-log';

if (!i18next.isInitialized) {
	i18next
		.use(i18nextDetector)
		.use(i18nextBackend)
		.init(i18nextOptions)
		.then(() => {
			log.info('[Localization] success load localization');
		})
		.catch((e) => {
			log.error('[Localization] Error init i18next', e);
		});

	i18next.on('failedLoading', (lng, ns, msg) => {
		log.error('[Localization] Error load i18next', lng, ns, msg);
	});
}

export const i18n = i18next;
