import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import legacy from 'rollup-plugin-legacy'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      // modules: true
      sourceMap: true, // true, "inline" or false
      extract: 'dist/style.css'
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    legacy({
      'node_modules/botui/build/botui.min.js': 'BotUI'
    })
  ]
}
