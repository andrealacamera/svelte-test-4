import { browser } from '$app/environment'
import { locale, waitLocale } from 'svelte-i18n'
import '$lib/i18n' // Import to initialize. Important :)
import type { LayoutLoad }  from './$types'

export const load: LayoutLoad = async () => {
	if (browser) {
		locale.set(window.navigator.language)
    console.log(window.navigator.language)
	}
	await waitLocale()
}

export const prerender = true;