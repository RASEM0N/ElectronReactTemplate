import { createRoot } from 'react-dom/client';

const rootRef = document.getElementById('root');

if (!rootRef) {
	throw new Error('#root element is undefined');
}

createRoot(rootRef).render(
	<div>
		<h2>Приложение</h2>
	</div>,
);