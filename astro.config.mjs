import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  //site: 'https://casavacanzelavecchiafonte.it',
  site: 'http://localhost:3000',
  base: '/',
  integrations: [react(), jopSoftwarecookieconsent({
    gui_options: {
      consent_modal: {
        title: 'Casa Vacanze La Vecchia Fonte',
        layout: 'cloud',
        // box/cloud/bar
        position: 'bottom center',
        // bottom/middle/top + left/right/center
        transition: 'slide',
        // zoom/slide
        swap_buttons: false // enable to invert buttons
      },

      settings_modal: {
        layout: 'box',
        // box/bar
        // position: 'left',           // left/right
        transition: 'slide' // zoom/slide
      }
    },

    languages: {
      'en': {
        // ...
        settings_modal: {
          // ...
          cookie_table_headers: [{
            col1: 'Name'
          }, {
            col2: 'Service'
          }, {
            col3: 'Description'
          }],
          blocks: [
          // ...
          {
            // ...
            toggle: {
              value: 'analytics'
            },
            cookie_table: [{
              col1: '^_ga',
              col2: 'Google Analytics',
              col3: 'description ...',
              is_regex: true
            }, {
              col1: '_gid',
              col2: 'Google Analytics',
              col3: 'description ...'
            }]
          }]
        }
      }
    }
  })]
});