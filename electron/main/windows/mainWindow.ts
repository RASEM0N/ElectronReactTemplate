import { join } from 'path';
import { Win } from '../lib/win';
import { ENVS } from '../const/process';

import iconPath from '~/assets/electron-vite.svg?path'

const { IS_DEV, SERVER_URL, DIST_PATH } = ENVS;


export const createMainWindow = () => {
	return new Win({
		options: {
			url: IS_DEV ? SERVER_URL : join(DIST_PATH, 'index.html'),

			icon: iconPath,
			webPreferences: {
				preload: join(__dirname, '../preload/index.js'),
				devTools: IS_DEV,
			},

			minWidth: 1050,
			minHeight: 560,
		},

		events: {
			onShow: (win) => {
				IS_DEV && win.webContents.openDevTools();
			},
		},
	});
};
