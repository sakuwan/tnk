import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const isProd = process.env.NODE_ENV !== 'development';
const toOutputFile = (file) => `dist/${file.match(/(?<=\/)[^/]*(?=\.\w+$)/i)}`;

const babelPlugin = babel({
  babelHelpers: 'bundle',
});

const terserPlugin = terser({
  ecma: 2020,
});

const generateConfig = (file) => {
  const outputFile = toOutputFile(file);
  const plugins = [
    resolve(),
    commonjs(),
    json(),
    postcss(),

    babelPlugin,
    ...(isProd ? [terserPlugin] : []),
  ];

  return {
    input: file,
    output: [{
      file: `${outputFile}${isProd ? '.cjs.min.js' : '.cjs.js'}`,
      format: 'cjs',
      ...(isProd ? null : { sourcemap: 'inline' }),
    }],
    plugins,
  };
};

export default [
  generateConfig('src/index.js'),
];
