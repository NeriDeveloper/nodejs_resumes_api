const {findAll, findOne, save} = require('./resumes.routes')

const routes = (server) => {
  server.post('/resumes', save)
  server.get('/resumes', findAll)
  server.get('/resumes/:id', findOne)
}

module.exports = routes
