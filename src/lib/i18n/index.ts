import { browser } from '$app/environment'
import { init, register, getLocaleFromNavigator } from 'svelte-i18n'

const defaultLocale = 'en'

register('en', () => import('./locales/en.json'))
register('it', () => import('./locales/it.json'))
console.log(" === i18n INIT ===")
init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? getLocaleFromNavigator() : defaultLocale
})