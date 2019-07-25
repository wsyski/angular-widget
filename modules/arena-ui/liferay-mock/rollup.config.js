import nodeResolve from 'rollup-plugin-node-resolve';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import commonjs from 'rollup-plugin-commonjs';
import {eslint} from 'rollup-plugin-eslint';
import pkg from './package.json';

export default [// browser-friendly umd build
  {
    input: 'src/index.js',
    output: {
      file: pkg.browser,
      format: 'iife',
      sourceMap: 'inline',
    },
    plugins: [nodeResolve({
      jsnext: true,
      main: true
    }), // so Rollup can find `ms`
      commonjs({include: 'node_modules/**'}), // so Rollup can convert `ms` to an ES module
      eslint({
        exclude: ['src/assets/**',]
      }), generatePackageJson({
        baseContents: {
          name: pkg.name,
          version: pkg.version,
          description: pkg.description,
          browser: pkg.browser.replace(/^dist\//, ''),
          author: pkg.author,
          license: pkg.license,
          files: ["index.js", "theme/**/*"]
        }
      })]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {}),],
    output: [{
      file: pkg.browser,
      format: 'iife'
    }]
  }];
