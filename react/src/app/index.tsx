import './styles/index.css';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './localization';

const rootReact = createRoot(document.getElementById('root')!);

rootReact.render(
	<I18nextProvider i18n={i18n}>
		<h2>Привет</h2>
	</I18nextProvider>,
);
