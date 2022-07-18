const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/mail',
    createProxyMiddleware({
      target: 'http://13.125.207.93:8080',
      changeOrigin: true,
    })
  );

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://13.125.207.93:8080',
      changeOrigin: true,
    })
  );
};
