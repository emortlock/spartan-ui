module.exports = {
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        loose: true,
        modules: false,
        targets: '>2%',
      },
    ],
  ],
}
