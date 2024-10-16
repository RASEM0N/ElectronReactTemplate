import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import packageJson from './package.json';
import { injectEnvHtml } from './vite/plugins/inject-env-html';

// https://vitejs.dev/config/
// https://github.com/electron-vite/electron-vite-react/blob/main/vite.config.ts
export default defineConfig(({ command }) => {
	const isServe = command === 'serve';

	// fs.rmSync('dist-electron', { recursive: true, force: true });

	const alias = {
		'@electron': path.join(__dirname, 'electron'),
		'@public': path.join(__dirname, 'public'),
		'@src': path.join(__dirname, 'src'),
	};

	const htmlEnvs = {
		APP_TITLE: packageJson.productName,
	};

	const define = {
		__IS_DEV__: JSON.stringify(isServe),
		__PUBLIC_PATH__: JSON.stringify('.'),
		__APP_TITLE__: JSON.stringify(htmlEnvs.APP_TITLE),
	};

	return {
		define,
		resolve: { alias },
		plugins: [react(), injectEnvHtml(htmlEnvs)],
	};
});
