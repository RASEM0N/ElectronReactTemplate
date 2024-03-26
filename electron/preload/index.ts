import { ipcRenderer, contextBridge } from 'electron';

// https://www.electronjs.org/docs/latest/tutorial/tutorial-preload
contextBridge.exposeInMainWorld('ipc', {
	on(...[channel, listener]: Parameters<typeof ipcRenderer.on>) {
		ipcRenderer.on(channel, (event, ...args) => listener(event, ...args));
	},
	off(...[channel, ...omit]: Parameters<typeof ipcRenderer.off>) {
		ipcRenderer.off(channel, ...omit);
	},
	send(...[channel, ...omit]: Parameters<typeof ipcRenderer.send>) {
		ipcRenderer.send(channel, ...omit);
	},
	invoke(...[channel, ...omit]: Parameters<typeof ipcRenderer.invoke>) {
		return ipcRenderer.invoke(channel, ...omit);
	},
});
