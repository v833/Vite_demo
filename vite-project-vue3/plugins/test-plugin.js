export default (options) => {
  return {
    name: 'test',
    config(userConfig) {
      // console.log('userConfig: ', userConfig)
      userConfig.server.port = 8888
      return userConfig
    },
    configResolved(resolvedConfig) {
      // console.log('resolvedConfig: ', resolvedConfig)
    },
    configureServer(server) {
      // console.log('server: ', server)
      // 执行优先级最高
      server.middlewares.use((req, res, next) => {
        if (req.url === '/foo') {
          res.end('bar')
        } else {
          next()
        }
      })
      // 执行优先级最低, 放在vite的中间件之后
      // return () => {
      //   server.middlewares.use((req, res, next) => {
      //     if (req.url === '/foo') {
      //       res.end('bar')
      //     } else {
      //       next()
      //     }
      //   })
      // }
    },
    transformIndexHtml(html) {
      // console.log('html: ', html)
      // return html.replace('<div id="app"></div>', '<div id="root">12355</div>')
    },
    handleHotUpdate(ctx) {
      // console.log('ctx: ', ctx)
      ctx.server.ws.send({
        type: 'custom',
        event: 'test',
        data: 'test'
      })
    }
  }
}
