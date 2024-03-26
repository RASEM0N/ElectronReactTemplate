// --- --- --- --- --- --- ---
import { app } from 'electron';

// --- --- --- --- --- --- ---
import { App } from './lib/app';
import { createMainWindow } from './windows/mainWindow';

const mainWindow = createMainWindow();
const globalApp = new App({
	app,
	events: {
		onReady: () => mainWindow.run(),
		onActivate: () => mainWindow.run(),
		onWinAllClosed: () => mainWindow.stop(false),
	},
});

globalApp.init();
