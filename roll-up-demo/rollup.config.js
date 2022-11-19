import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      // plugins: [terser()],
      banner: '/* This is a banner */'
    },
    external: ['vue'],
    plugins: [resolve(), './plugins/index.js']
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    }
  }
]
