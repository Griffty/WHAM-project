import { resolve } from '$app/paths';
import type { RouteId } from '$app/types';

/**
 * Link to a page as its built `.html` file, e.g. pageUrl('/cyprus') -> .../cyprus.html.
 * Use this for every internal link so it works on the static host.
 */
export function pageUrl(route: RouteId): string {
	const url = resolve(route as '/');
	return route === '/' ? url : `${url}.html`;
}
