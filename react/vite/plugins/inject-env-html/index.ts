import type { PluginOption } from 'vite';

export const injectEnvHtml = (envs: { [name: string]: string }): PluginOption => {
	return {
		name: 'inject-env-html',
		transformIndexHtml(html: string) {
			return Object.entries(envs).reduce((r, [k, v]) => r.replace(`%${k}%`, v), html);
		},
	};
};
