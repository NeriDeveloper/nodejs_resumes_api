const restify = require('restify')
const routes = require('../routes')
const cors = require('./cors')
const {config, databaseFactory} = require('../config')

const factoryServer = () => {
  const server = restify.createServer()
  server.$databaseConfig = config
  server.$database = databaseFactory(server)

  server.pre(cors.preflight)
  server.use(cors.actual)
  server.use(restify.plugins.bodyParser())
  server.use((req, res, next) => {
    req.$database = server.$database
    next()
  })

  routes(server)

  return server
}

module.exports = factoryServer
