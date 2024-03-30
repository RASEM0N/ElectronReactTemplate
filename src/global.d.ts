/* globals */
declare interface Window {
	/* Preload */
	ipc: import('electron').IpcRenderer;

	/* Dev */
	__i18n__: import('i18next');
	__rootReact__: import('react-dom/client').Root;
	__rootStore__: import('@/app/rootStore').RootStore;
}

/* Vite variables */
declare const __IS_DEV__: boolean;
declare const __PUBLIC_PATH__: boolean;
