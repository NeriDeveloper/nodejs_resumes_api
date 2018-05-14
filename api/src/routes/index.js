const {resumesFindAll} = require('./resumes.routes')

const routes = (server) => {
  server.get('/api/v1/resumes', resumesFindAll)
}

module.exports = routes
