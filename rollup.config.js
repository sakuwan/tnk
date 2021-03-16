import path from 'path';

import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import * as pkgConfig from './package.json';

const stripFilename = (file) => `${file.match(/(?<=\/)[^/]*(?=\.\w+$)/i)}`;

const isProd = process.env.NODE_ENV !== 'development';

const postcssPlugin = postcss({
  extract: path.resolve('./dist/public/assets/css/styles.css'),

  ...(isProd ? { minimize: true } : null),
});

const copyPlugin = copy({
  targets: [
    { src: './assets', dest: './dist/public' },
    { src: './src/server/views', dest: './dist' },
  ],
});

const babelPlugin = babel({
  babelHelpers: 'bundled',
});

const terserPlugin = terser({
  ecma: 2020,
});

const generateConfig = (file) => {
  const plugins = [
    copyPlugin,
    postcssPlugin,

    resolve(),
    commonjs(),
    json(),

    babelPlugin,
    ...(isProd ? [terserPlugin] : []),
  ];

  return {
    input: file,
    output: [{
      file: `./dist/${stripFilename(file)}.js`,
      format: 'cjs',
      exports: 'auto',

      ...(isProd ? null : { sourcemap: 'inline' }),
    }],
    plugins,

    external: Object.keys(pkgConfig.dependencies),
  };
};

const clientConfig = (file) => ({
  input: file,
  output: [{
    file: `./dist/public/assets/js/${stripFilename(file)}.js`,
    format: 'iife',

    globals: {
      window: 'window',
      document: 'document',
    },

    ...(isProd ? null : { sourcemap: 'inline' }),
  }],

  plugins: [
    babelPlugin,
    ...(isProd ? [terserPlugin] : []),
  ],
});

export default [
  generateConfig(pkgConfig.main),
  clientConfig('./src/client/app.main.js'),
];
