// --- --- --- --- --- --- ---
import { app } from 'electron';

// --- --- --- --- --- --- ---
import { App } from './lib/app';
import { createMainWindow } from './windows/mainWindow';

const mainWindow = createMainWindow();
const globalApp = new App({
	app,
	events: {
		onWinAllClosed: () => mainWindow.stop(false),
		onActivate: () => mainWindow.tryShow(),

		onReady: async () => {
			const { i18n } = await import('./localization/i18next');

			i18n.on('initialized', () => {
				mainWindow.run();
			});
		},
	},
});

globalApp.init();
