import i18next from 'i18next';
import i18nextDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { i18nextOptions } from './i18nextOptions';

i18next
	.use(i18nextDetector)
	.use(initReactI18next)
	.init(i18nextOptions)
	.then(() => {
		console.info('[Localization] success load localization');
	})
	.catch((e) => {
		console.error('[Localization] Error init i18next', e);
	});

i18next.on('failedLoading', (lng, ns, msg) => {
	console.error('[Localization] Error load i18next', lng, ns, msg);
});


if (__IS_DEV__) {
	window.__i18n__ = i18next;
}

export const i18n = i18next;
