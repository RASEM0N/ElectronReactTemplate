// всякое бывает ...
import { RootStoreContext } from '@src/app/rootStore';
import type { RootStore } from '@src/app/rootStore';
import { useContext } from 'react';

export const useRootStore = (): RootStore => {
	const store = useContext(RootStoreContext);

	if (!store) {
		throw new Error('store is undefined');
	}

	return store;
};
