import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

module.exports = {
  plugins: [
    postcssImport,
    postcssPresetEnv(),
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    cssnano,
  ],
};
