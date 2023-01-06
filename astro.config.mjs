import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://framik76.github.io',
    base: '/casavacanze-lavecchiafonte-website/',
    integrations: [react()]
});
