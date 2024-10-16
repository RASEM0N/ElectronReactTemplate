import { createContext } from 'react';
import type { FC, ReactNode } from 'react';
import type { RootStore } from './rootStore';

interface RootStoreProviderProps {
	children: ReactNode;
	store: RootStore;
}

export const RootStoreProvider: FC<RootStoreProviderProps> = ({ children, store }) => {
	return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
};

export const RootStoreContext = createContext<RootStore | null>(null);
