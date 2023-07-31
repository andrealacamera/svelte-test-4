import { browser } from '$app/environment'
import { locale, waitLocale, getLocaleFromNavigator } from 'svelte-i18n'
import '$lib/i18n' // Import to initialize. Important :)
import type { LayoutLoad }  from './$types'

export const load: LayoutLoad = async () => {
	// console.log("LOCALE = ", getLocaleFromNavigator())
	if (browser) {
		let loc = localStorage.getItem("__myLanguage");
    if (loc) {
			locale.set(loc)
      // console.log("LOCAL STORAGE value = ", loc)
    } else {
			locale.set(window.navigator.language)
			// console.log("WINDOW NAVIGATOR LANGUAGE value = ", window.navigator.language)
		}
	}
	await waitLocale()
}

export const prerender = true;