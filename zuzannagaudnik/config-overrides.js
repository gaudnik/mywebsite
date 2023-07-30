const path = require('path');

module.exports = function override(config, env) {
  // Dodaj polifylle dla brakujących modułów Node.js
  config.resolve.fallback = {
    stream: require.resolve('stream-browserify'),
    path: require.resolve('path-browserify'),
    crypto: require.resolve('crypto-browserify')
  };

  // Dodaj alias dla 'fs' (może być wymagane dla niektórych modułów)
  config.resolve.alias.fs = path.resolve(__dirname, 'src/mock-fs.js');

  return config;
};
