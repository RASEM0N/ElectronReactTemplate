// https://www.electron.build/configuration/configuration
// eslint-disable-next-line no-undef
const global = {
	$schema:
		'https://raw.githubusercontent.com/electron-userland/electron-builder/master/packages/app-builder-lib/scheme.json',

	appId: 'YourAppID',
	productName: 'YourAppName',
	directories: {
		output: 'release/${version}',
	},

	asar: true,
	files: ['dist', 'dist-electron'],
};

const win = {
	win: {
		target: [
			{
				target: 'nsis',
				arch: ['x64'],
			},
		],
		artifactName: '${productName}-Windows-${version}-Setup.${ext}',
	},
	nsis: {
		oneClick: false,
		perMachine: false,
		allowToChangeInstallationDirectory: true,
		deleteAppDataOnUninstall: false,
	},
};

const mac = {
	mac: {
		target: ['dmg'],
		artifactName: '${productName}-Mac-${version}-Installer.${ext}',
	},
};

const linux = {
	linux: {
		target: ['AppImage'],
		artifactName: '${productName}-Linux-${version}.${ext}',
	},
};

// eslint-disable-next-line no-undef
module.exports = {
	...global,
	...mac,
	...linux,
	...win,
};
