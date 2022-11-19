import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import myPlugin from './plugins/index.js'
import { babel } from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import strip from '@rollup/plugin-strip'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      // plugins: [terser()],
      banner: '/* This is a banner */'
    },
    external: ['vue'],
    plugins: [
      resolve(),
      strip({
        debugger: true,
        functions: ['console.log', 'assert.*', 'debug', 'alert'],
        sourceMap: false
      }),
      typescript(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env']
      }),
      // myPlugin(),
      replace({
        __TEST__: '123',
        preventAssignment: true
      })
    ]
  }
  // {
  //   input: 'src/index.ts',
  //   output: {
  //     file: 'dist/bundle.cjs.js',
  //     format: 'cjs'
  //   }
  // }
]
