// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://juptune.github.io/',
	base: '/juptune-docs',
	integrations: [
		starlight({
			title: 'Juptune',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Juptune/juptune' }],
			sidebar: [
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Tools',
					items: [{ autogenerate: { directory: 'tools' } }],
				},
			],
		}),
	],
});
