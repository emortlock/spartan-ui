const path = require('path')
const { NODE_ENV } = process.env

const isDev = NODE_ENV === 'development'

module.exports = {
  title: 'Spartan UI',
  styleguideDir: 'docs',
  sections: [
    {
      name: 'About',
      content: path.resolve(__dirname, 'README.md'),
    },
    {
      name: 'Components',
      components: ['src/components/**/[A-Z]*.{js,jsx,ts,tsx}'],
    },
  ],
  propsParser: require('react-docgen-typescript').parse,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-reboot.min.css',
        },
      ],
    },
  },
  webpackConfig: {
    devtool: isDev && 'inline-source-map',
    module: {
      rules: [
        { test: /\.(js|mjs|jsx|ts|tsx)$/, loader: 'babel-loader' },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      alias: {
        'spartan-ui': path.resolve(__dirname, 'src'),
        demo: path.resolve(__dirname, 'site'),
      },
      extensions: [
        'web.mjs',
        'mjs',
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
      ],
    },
  },
}
