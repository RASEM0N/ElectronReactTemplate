import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import packageJson from './package.json';
import { injectEnvHtml } from './vite/plugins/inject-env-html';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	const isServe = command === 'serve';

	const htmlEnvs = {
		APP_TITLE: packageJson.productName,
	};

	const define = {
		__IS_DEV__: JSON.stringify(isServe),
		__APP_TITLE__: JSON.stringify(htmlEnvs.APP_TITLE),
		__PUBLIC_PATH__: JSON.stringify('.'),
	};

	return {
		define,
		resolve: {
			alias: {

				// content
				'~public': path.join(__dirname, 'public'),

				// src
				'~app': path.join(__dirname, 'src/app'),
				'~features': path.join(__dirname, 'src/features'),
				'~pages': path.join(__dirname, 'src/pages'),
				'~entities': path.join(__dirname, 'src/entities'),
				'~widgets': path.join(__dirname, 'src/widgets'),
				'~shared': path.join(__dirname, 'src/shared'),
			},
		},
		plugins: [react(), injectEnvHtml(htmlEnvs)],
	};
});
