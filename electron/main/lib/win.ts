import { BrowserWindow } from 'electron';
import type { BrowserWindowConstructorOptions } from 'electron';

interface WindowOptions extends BrowserWindowConstructorOptions {
	url: string;
}

interface WinEvents {
	onShow?: (win: BrowserWindow) => void;
	onDidFinishLoad?: (win: BrowserWindow) => void;
}

interface WinConstructor {
	events?: WinEvents;
	options: WindowOptions;
}

export class Win {
	private browser?: BrowserWindow;
	private readonly events: WinEvents;
	private readonly options: WindowOptions;

	constructor({ events, options }: WinConstructor) {
		this.events = events ?? {};
		this.options = options;

		this.onShow = this.onShow.bind(this);
		this.onDidFinishLoad = this.onDidFinishLoad.bind(this);
	}

	public run() {
		if (!this.options) {
			throw new Error('Window options is undefined');
		}

		this.browser = new BrowserWindow(this.options);
		this.browser.loadURL(this.options.url);
		this.addEventListeners();
	}

	public stop(canDestroy: boolean) {
		if (canDestroy) {
			this.browser?.webContents.removeAllListeners();
			this.browser?.destroy();
		}

		this.browser = undefined;
	}

	private addEventListeners() {
		this.browser?.webContents.on('did-finish-load', this.onDidFinishLoad);
		this.onShow();
	}

	private onDidFinishLoad() {
		if (!this.browser) {
			return;
		}

		this.browser?.webContents.send('main-process-message', new Date().toLocaleString());
		this.events.onDidFinishLoad?.(this.browser);
	}

	private onShow() {
		if (!this.browser) {
			return;
		}

		this.events.onShow?.(this.browser);
	}
}
