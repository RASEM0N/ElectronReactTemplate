/// <reference types="vite-plugin-electron/electron-env" />
/// <reference types="../vite/plugins/vite-paths-loader/types" />

/* Vite variables */
declare const __IS_DEV__: boolean;
declare const __PUBLIC_PATH__: string;
declare const __DIST_PATH__: string;
declare const __APP_TITLE__: string;

declare namespace NodeJS {
	interface ProcessEnv {
		/**
		 * The built directory structure
		 *
		 * ```tree
		 * ├─┬─┬ dist
		 * │ │ └── index.html
		 * │ │
		 * │ ├─┬ dist-electron
		 * │ │ ├── main/index.js
		 * │ │ └── preload/index.js
		 * │
		 * ```
		 */
		DIST: string;
		/** /dist/ or /public/ */
		VITE_PUBLIC: string;
	}
}
