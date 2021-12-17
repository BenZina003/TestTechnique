module.exports = {
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3080'
      },
      '/security': {
        target: 'http://localhost:3080'
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
};
