const Koa = require('koa')
const router = require('./router')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app
  .use(static(path.join(__dirname, '../static')))
  .use(
    views(path.resolve(__dirname, '../app/view/pages'), {
      extension: 'pug'
    })
  )
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(65534)

