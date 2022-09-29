import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx"],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex({
		layout: "./src/lib/server/components/MarkdownLayout.svelte"
	}),preprocess()],

	kit: {
		adapter: adapter()
	}
};

export default config;
