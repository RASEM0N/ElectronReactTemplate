import { DEVICE } from '../const/process';
import { BrowserWindow } from 'electron';

interface AppEvents {
	onWinAllClosed: () => void;
	onActivate: () => void;
	onReady: () => void;
}

interface AppConstructor {
	app: Electron.App;
	events: AppEvents;
}

export class App {
	private app: Electron.App;
	private events: AppEvents;

	constructor({ app, events }: AppConstructor) {
		this.events = events;
		this.app = app;

		this.onWinAllClosed = this.onWinAllClosed.bind(this);
		this.onActivate = this.onActivate.bind(this);
		this.onReady = this.onReady.bind(this);
	}

	public init() {
		this.addEventListeners();
	}

	public quit() {
		this.app.quit();
	}

	private addEventListeners() {
		this.app.on('window-all-closed', this.onWinAllClosed);
		this.app.on('activate', this.onActivate);
		this.app.on('ready', this.onReady);
	}

	private onWinAllClosed() {
		if (DEVICE.IS_MAC) {
			return;
		}
		this.app.quit();
		this.events.onWinAllClosed();
	}

	private onActivate() {
		if (BrowserWindow.getAllWindows().length) {
			return;
		}

		this.events.onActivate();
	}

	private onReady() {
		this.events.onReady();
	}
}
