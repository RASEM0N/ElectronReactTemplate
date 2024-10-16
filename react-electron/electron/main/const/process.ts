import { app } from 'electron';
import path from 'node:path';

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main/index.js
// │ │ └── preload/index.js
// │

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const SERVER = process.env['VITE_DEV_SERVER_URL'] as string;
const DIST = path.join(__dirname, '../dist-electron');
const PUBLIC = app.isPackaged ? DIST : path.join(DIST, '../public');

export const ENVS = {
	IS_DEV: !!SERVER,
	SERVER_URL: SERVER,

	PUBLIC_PATH: PUBLIC,
	DIST_PATH: DIST,
};

export const DEVICE = {
	PLATFORM: process.platform,

	IS_MAC: process.platform === 'darwin',
	IS_WIN: process.platform === 'win32',
	IS_LINUX: !['darwin', 'win32'].includes(process.platform),
};
