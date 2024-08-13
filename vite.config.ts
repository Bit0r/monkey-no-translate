import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import monkey, { util } from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		AutoImport({
			imports: [util.unimportPreset],
		}),
		monkey({
			entry: 'src/main.ts',
			userscript: {
				name: 'no-translates',
				icon: 'https://www.gstatic.com/translate/favicon.ico',
				namespace: 'bit0r/monkey',
				match: ['*://*/*'],
				version: '0.0.1',
				description: 'Add translate="no" to all selectors',
			},
			server: {
				open: true,
			},
		}),
	],
})
