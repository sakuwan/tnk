import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const stripFilename = (file) => `${file.match(/(?<=\/)[^/]*(?=\.\w+$)/i)}`;

const isProd = process.env.NODE_ENV !== 'development';

const babelPlugin = babel({
  babelHelpers: 'bundled',
});

const terserPlugin = terser({
  ecma: 2020,
});

const copyPlugin = copy({
  targets: [
    { src: './assets/**/*', dest: './dist/public/' },
    { src: './src/server/views', dest: './dist/views' },
  ],
});

const generateConfig = (file) => {
  const plugins = [
    resolve(),
    commonjs(),
    json(),
    postcss(),

    copyPlugin,
    babelPlugin,
    ...(isProd ? [terserPlugin] : []),
  ];

  return {
    input: file,
    output: [{
      file: stripFilename(file),
      format: 'cjs',
      ...(isProd ? null : { sourcemap: 'inline' }),
    }],
    plugins,
  };
};

export default [
  generateConfig('./src/server/server.main.js'),
];
