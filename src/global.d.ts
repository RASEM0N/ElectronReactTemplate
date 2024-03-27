
declare interface Window {

	/* Preload */
	ipc: import('electron').IpcRenderer;

	/* Dev */
	__i18n__: import('i18next');
	__reactRoot__: import('react-dom/client').Root
}


/* Vite variables */
declare const __IS_DEV__: boolean;
declare const __PUBLIC_PATH__: boolean;