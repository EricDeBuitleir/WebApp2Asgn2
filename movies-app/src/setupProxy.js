// REFERENCE

// Used code from josipat on Stackoverflow to fix an issue when trying to run the proxy in my package.json
// Link to the code can be found below:

// https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};

