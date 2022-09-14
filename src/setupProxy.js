const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    next()
  })

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3033/',
      pathRewrite: (path) => path.replace(/^\/api/, ''),
      logLevel: 'warn',
      changeOrigin: true,
      secure: false,
      onError: (err, req, res) => {
        res.status(500).send(`Proxy v1 error: ${err.message}`)
        res.end()
      },
    })
  );

  app.use(
    '/images',
    createProxyMiddleware({
      target: 'http://localhost:3033/',
      logLevel: 'warn',
      changeOrigin: true,
      secure: false,
      onError: (err, req, res) => {
        res.status(500).send(`Proxy v1 error: ${err.message}`)
        res.end()
      },
    })
  );
};