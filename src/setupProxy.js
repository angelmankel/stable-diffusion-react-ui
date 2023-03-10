const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    // Move this over to the server instead. This will allow you to create a queue system 
    // for generating images on two or more GPUs. Could also make the server app a load balancer
    // for everything in the app that requires it. If it was packages as a small app that can 
    // be installed on 'nodes' to add them that would be good too.
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
  app.use(
    '/jobs',
    createProxyMiddleware({
      target: 'http://localhost:3006',
      changeOrigin: true,
    })
  )
  app.use(
    '/progress',
    createProxyMiddleware({
      target: 'http://localhost:3006',
      changeOrigin: true,
    })
  )
  app.use(
    "/socket.io",
    createProxyMiddleware({
      target: "http://localhost:3007",
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/socket.io": "",
      },
    })
  );
  app.use(
    '/gen-settings',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  )
  app.use(
    '/config',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  )
}