import { adapter as svelteAdapter } from '@wuchale/svelte';
import { adapter as jsAdapter } from 'wuchale/adapter-vanilla';

import { defineConfig } from 'wuchale';

export default defineConfig({
  sourceLocale: 'en',
  otherLocales: ['it', 'fr', 'es', 'pt', 'ca'],
  adapters: {
    main: svelteAdapter({
      loader: 'svelte'
    }),
    js: jsAdapter({
      files: ['src/**/+{layout,page}.{js,ts}']
    })
  }
});
