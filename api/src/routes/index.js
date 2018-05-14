const {findAll, save} = require('./resumes.routes')

const routes = (server) => {
  server.post('/api/v1/resumes', save)
  server.get('/api/v1/resumes', findAll)
}

module.exports = routes
