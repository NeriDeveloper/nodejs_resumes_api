const restify = require('restify')
const routes = require('../routes')
const cors = require('./cors')

const factoryServer = () => {
  const server = restify.createServer()

  server.pre(cors.preflight)
  server.use(cors.actual)
  server.use(restify.plugins.bodyParser())

  routes(server)

  return server
}

module.exports = factoryServer
