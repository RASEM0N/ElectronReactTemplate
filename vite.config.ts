import { defineConfig } from 'vite';
import path from 'node:path';
import electron from 'vite-plugin-electron/simple';
import react from '@vitejs/plugin-react';
import packageJson from './package.json';

// https://vitejs.dev/config/
// https://github.com/electron-vite/electron-vite-react/blob/main/vite.config.ts
export default defineConfig(({ command }) => {
	const distElectron = 'dist-electron';

	const isServe = command === 'serve';
	const isBuild = command === 'build';
	const needSourcemap = isServe || !!process.env.VSCODE_DEBUG;

	// fs.rmSync('dist-electron', { recursive: true, force: true });

	const htmlEnvs = {
		APP_TITLE: packageJson.productName,
	};

	return {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src'),
				'~': path.join(__dirname, 'public'),
			},
		},

		define: {
			__PUBLIC_PATH__: JSON.stringify('.'),
			__IS_DEV__: JSON.stringify(isServe),
		},

		plugins: [
			react(),
			electron({
				main: {
					entry: 'electron/main/index.ts',
					vite: {
						build: {
							sourcemap: needSourcemap,
							minify: isBuild,
							outDir: `${distElectron}/main`,
						},
					},
				},

				preload: {
					input: path.join(__dirname, 'electron/preload/index.ts'),
					vite: {
						build: {
							sourcemap: needSourcemap ? 'inline' : undefined,
							minify: isBuild,
							outDir: `${distElectron}/preload`,
						},
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
