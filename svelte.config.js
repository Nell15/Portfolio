// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},

		alias: {
			$assets: "src/assets"
		},

		prerender: {
			handleMissingId: 'ignore'
		  },

		// vite: {
		// 	server: {
		// 	  fs: {
		// 		allow: ['public']
		// 	  }
		// 	},
		// 	plugins: [
		// 		{
		// 		name: 'external-resources',
		// 			resolveId(source) {
		// 			if (source.startsWith('https://')) {
		// 				return { id: source, external: true };
		// 			}
		// 			return null;
		// 			}
		// 		}
		// 	]
		// }
	}
};

export default config;
