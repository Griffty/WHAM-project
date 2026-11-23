import type { Reroute } from '@sveltejs/kit';

// Pages are served as `<route>.html` (e.g. /eastmedfall2026/cyprus.html).
// Map those URLs back to SvelteKit routes so in-app navigation works too.
export const reroute: Reroute = ({ url }) => {
	const path = url.pathname;
	if (path.endsWith('/index.html')) return path.slice(0, -'index.html'.length);
	if (path.endsWith('.html')) return path.slice(0, -'.html'.length);
};
