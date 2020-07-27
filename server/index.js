const express = require('express');
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express();

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.Schema.Types.Boolean.convertToFalse.add('')

mongoose.connect('mongodb://localhost/api', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

app.use(bodyParser.json())
app.use(express.json())

const serviceRoutes = require('./routes/service')
app.use('/api/service', serviceRoutes)

const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !=='production'

async function start() {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  await nuxt.ready()

  if(config.dev) {
    const builder = new Builder(nuxt)
    await builder.builder()
  }

  app.use(nuxt.render)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
