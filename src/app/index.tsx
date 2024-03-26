import { createRoot } from 'react-dom/client';

const rootRef = document.getElementById('root');

if (!window.ipc) {
	throw new Error('window.ipc is undefined');
}

if (!rootRef) {
	throw new Error('#root element is undefined');
}

createRoot(rootRef).render(
	<div>
		<h2>Приложение</h2>
	</div>,
);

window.ipc.on('main-process-message', (_, message) => {
	console.log(message);
});
