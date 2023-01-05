const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/sdapi',
    createProxyMiddleware({
      target: 'http://localhost:7860',
      changeOrigin: true,
    })
  )
  app.use(
    '/library',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  )
}