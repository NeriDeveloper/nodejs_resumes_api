const routes = (server) => {
  server.get('/status', (req, res, next) => {
    res.send({message: `I'M A LIVE... lol`})
    next()
  })
}

module.exports = routes
