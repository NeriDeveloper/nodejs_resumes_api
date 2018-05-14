const restify = require('restify')
const routes = require('../routes')

const factoryServer = () => {
  const server = restify.createServer()
  routes(server)

  return server
}

module.exports = factoryServer
