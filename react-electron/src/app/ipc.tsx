if (!window.ipc) {
	throw new Error('window.ipc is undefined');
}

window.ipc.on('main-process-message', (_, message) => {
	console.log(message);
});
