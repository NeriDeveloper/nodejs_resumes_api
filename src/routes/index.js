const {findAll, save} = require('./resumes.routes')

const routes = (server) => {
  server.post('/resumes', save)
  server.get('/resumes', findAll)
}

module.exports = routes
