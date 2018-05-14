const supertest = require('supertest')
const chai = require('chai')

const {factoryServer} = require('../../src/server')

const server = factoryServer()
global.server = server
global.request = supertest(server)
global.expect = chai.expect

