import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import uno from 'astro-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import { extractorSvelte } from '@unocss/core';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node(),
  server: { port: 8080 },
  integrations: [
    uno({
      extractors: [extractorSvelte],
      presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: [
              {
                name: 'Inter',
                weights: ['400', '500', '700'],
                italic: true,
              },
              {
                name: 'sans-serif',
                provider: 'none',
              },
            ],
          },
        }),
        presetAttributify({
          prefix: 'un-',
          prefixedOnly: true,
        }),
      ],
    }),
    svelte(),
  ],
});
