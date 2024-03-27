import './styles/index.css';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './localization/i18next';

const rootRef = document.getElementById('root');

if (!rootRef) {
	throw new Error('#root element is undefined');
}

const root = createRoot(rootRef);
root.render(
	<I18nextProvider i18n={i18n}>
		<h2>Привет</h2>
	</I18nextProvider>,
);

if (__IS_DEV__) {
	window.__reactRoot__ = root;
}
