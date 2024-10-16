import './styles/index.css';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './localization';
import { RootStore, RootStoreProvider } from './rootStore';

const rootRef = document.getElementById('root');

if (!rootRef) {
	throw new Error('#root element is undefined');
}

const rootReact = createRoot(rootRef);
const rootStore = new RootStore();

rootReact.render(
	<I18nextProvider i18n={i18n}>
		<RootStoreProvider store={rootStore}>
			<h2>Привет</h2>
		</RootStoreProvider>
	</I18nextProvider>,
);

if (__IS_DEV__) {
	window.__rootReact__ = rootReact;
	window.__rootStore__ = rootStore;
}
