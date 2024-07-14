import type { PluginOption } from 'vite';
import fs from 'fs/promises';

// Vite не отдает base64 вместо url
// https://github.com/vitejs/vite/issues/5238

// Typescript:
// import path from 'main/assets/icons/win_unread.ico?path';
//
// Javascript:
// const path = "D:/work/compass_dev/electron/main/assets/icons/win_unread.ico";

export const pathsLoader = (): PluginOption => {
	return {
		name: 'vite-paths-loader',
		enforce: 'pre',

		load: async (id) => {
			if (!id.match(/\.*\?(path)?$/)) {
				return;
			}

			const [path] = id.split('?', 2);

			// проверяем на то есть ли такой файл или нет
			// Если нету будет ошибка
			await fs.access(path);

			return `export default '${path}'`;
		},
	};
};
