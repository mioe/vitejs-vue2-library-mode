import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'
import ViteIcons from 'vite-plugin-icons'
import { visualizer } from 'rollup-plugin-visualizer'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('🦕 vite.config.js/defineConfig', command, mode)

  return {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'packages')}/`,
      },
    },
    plugins: [
      createVuePlugin(),

      // https://github.com/antfu/vite-plugin-windicss
      WindiCSS(),

      // https://github.com/antfu/vite-plugin-icons
      ViteIcons(),

      // https://github.com/btd/rollup-plugin-visualizer
      visualizer(),
    ],

    build: {
      lib: {
        entry: path.resolve(__dirname, 'packages/main.js'),
        name: 'index',
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  }
})
