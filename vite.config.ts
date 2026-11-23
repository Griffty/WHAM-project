import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

// The site is hosted at https://eastmedfall2026.witcsas.reclaim.hosting/eastmedfall2026/
const BASE_PATH = '/eastmedfall2026';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: vitePreprocess(),
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Every page is prerendered to a plain .html file in build/ (no server needed).
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				precompress: false,
				strict: true
			}),

			paths: {
				base: BASE_PATH
			},

			// Put all CSS and JS directly inside each .html file.
			inlineStyleThreshold: Infinity,
			output: {
				bundleStrategy: 'inline'
			}
		})
	],
	build: {
		rolldownOptions: {
			checks: {
				// Inlining the JS bundles it as a classic script, where `import.meta` doesn't exist.
				// The only uses are in SvelteKit's and Vite's own dev/preload code, and replacing
				// them with `{}` is correct here, so don't warn about it.
				emptyImportMeta: false,
				// Skip the "plugins took X seconds" timing report at the end of the build.
				bundlerTimings: false
			}
		}
	}
});
