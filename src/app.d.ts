// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	interface data_carousel {
		id: number,
		title: string,
		text: string,
		button: string,
		img: string,
		url: string
	}
}

export {};
