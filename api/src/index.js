const restify = require('restify')
const server = restify.createServer()

server.get('/status', (req, res, next) => {
  res.send({message: `I'M A LIVE... lol`})
  next()
})

server.listen(process.env.PORT || 3000)
