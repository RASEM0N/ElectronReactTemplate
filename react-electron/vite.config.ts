import { defineConfig } from 'vite';
import path from 'node:path';
import electron from 'vite-plugin-electron/simple';
import react from '@vitejs/plugin-react';
import packageJson from './package.json';
import { pathsLoader } from './vite/plugins/vite-paths-loader';

// https://vitejs.dev/config/
// https://github.com/electron-vite/electron-vite-react/blob/main/vite.config.ts
export default defineConfig(({ command }) => {
	const distElectron = path.join(__dirname, 'dist-electron');

	const isServe = command === 'serve';
	const isBuild = command === 'build';
	const needSourcemap = isServe || !!process.env.VSCODE_DEBUG;

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
		__DIST_PATH__: distElectron,
		__APP_TITLE__: htmlEnvs.APP_TITLE
	};

	return {
		define,
		resolve: { alias },

		plugins: [
			react(),
			electron({
				main: {
					entry: 'electron/main/index.ts',
					vite: {
						define,
						resolve: { alias },
						build: {
							sourcemap: needSourcemap,
							minify: isBuild,
							outDir: `${distElectron}/main`,
						},
						plugins: [pathsLoader()],
					},
				},

				preload: {
					input: path.join(__dirname, 'electron/preload/index.ts'),
					vite: {
						define,
						resolve: { alias },
						build: {
							sourcemap: needSourcemap ? 'inline' : undefined,
							minify: isBuild,
							outDir: `${distElectron}/preload`,
						},
						plugins: [pathsLoader()],
					},
				},

				// https://github.com/electron-vite/vite-plugin-electron-renderer
				renderer: {},
			}),
			{
				name: 'inject-env-html',
				transformIndexHtml(html: string) {
					return Object.entries(htmlEnvs).reduce(
						(r, [k, v]) => r.replace(`%${k}%`, v),
						html,
					);
				},
			},
		],
	};
});
