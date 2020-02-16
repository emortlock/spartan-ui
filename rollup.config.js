import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'

import { name } from './package.json'

let shebang = {}

const input = 'src/index.tsx'
const outputDir = 'dist'

export function createRollupConfig(format, env) {
  const isDev = env === 'development'

  return {
    // Tell Rollup the entry point to the package
    input,
    // Tell Rollup which packages to ignore
    external: id => !id.startsWith('.') && !id.startsWith('/'),
    // Establish Rollup output
    output: {
      // Set filenames of the consumer's package
      file: [
        `${outputDir}/index`,
        format !== 'esm' && format,
        isDev && 'dev',
        'js',
      ]
        .filter(Boolean)
        .join('.'),
      // Pass through the file format
      format,
      // Do not let Rollup call Object.freeze() on namespace import objects
      // (i.e. import * as namespaceImportObject from...) that are accessed dynamically.
      freeze: false,
      // Do not let Rollup add a `__esModule: true` property when generating exports for non-ESM formats.
      esModule: false,
      // Rollup has treeshaking by default, but we can optimize it further...
      treeshake: {
        // We assume reading a property of an object never has side-effects.
        propertyReadSideEffects: false,
      },
      name: name,
      sourcemap: true,
      globals: { react: 'React', 'react-native': 'ReactNative' },
      exports: 'named',
    },
    plugins: [
      resolve({
        mainFields: ['module', 'main', 'browser'],
      }),
      json(),
      {
        // Custom plugin that removes shebang from code
        // See: https://github.com/Rich-Harris/buble/pull/165
        transform(code) {
          let reg = /^#!(.*)/
          let match = code.match(reg)

          shebang[name] = match ? '#!' + match[1] : ''

          code = code.replace(reg, '')

          return {
            code,
            map: null,
          }
        },
      },
      typescript({
        typescript: require('typescript'),
        cacheRoot: `./node_modules/.cache/.rts2_cache_${format}/`,
      }),
      babel({
        exclude: /node_modules/,
        plugins: [
          require.resolve('babel-plugin-annotate-pure-calls'),
          require.resolve('babel-plugin-dev-expression'),
          format !== 'cjs' && [
            require.resolve('babel-plugin-transform-rename-import'),
            {
              replacements: [{ original: 'lodash', replacement: 'lodash-es' }],
            },
          ],
        ].filter(Boolean),
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      sourceMaps(),
      sizeSnapshot({
        printInfo: false,
      }),
      !isDev &&
        terser({
          sourcemap: true,
          output: { comments: false },
          compress: {
            keep_infinity: true,
            pure_getters: true,
            collapse_vars: false,
          },
          ecma: 5,
          toplevel: format === 'cjs',
          warnings: true,
        }),
    ],
  }
}

const formats = ['esm', 'cjs']
const environments = ['development', 'production']

module.exports = formats.reduce((config, format) => {
  return [
    ...config,
    ...environments.map(env => createRollupConfig(format, env)),
  ]
}, [])
