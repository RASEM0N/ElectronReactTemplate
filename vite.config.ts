import { defineConfig } from 'vite';
import path from 'node:path';
import fs from 'node:fs';
import electron from 'vite-plugin-electron/simple';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// https://github.com/electron-vite/electron-vite-react/blob/main/vite.config.ts
export default defineConfig(({ command }) => {
	const distPath = 'dist-electron';

	const isServe = command === 'serve';
	const isBuild = command === 'build';
	const needSourcemap = isServe || !!process.env.VSCODE_DEBUG;

	fs.rmSync('dist-electron', { recursive: true, force: true });

	return {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src'),
			},
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
							outDir: `${distPath}/main`,
						},
					},
				},

				preload: {
					input: path.join(__dirname, 'electron/preload/index.ts'),
					vite: {
						build: {
							sourcemap: needSourcemap ? 'inline' : undefined,
							minify: isBuild,
							outDir: `${distPath}/preload`,
						},
					},
				},

				// https://github.com/electron-vite/vite-plugin-electron-renderer
				renderer: {},
			}),
		],
	};
});
