const hugoLuisSantosResume = {
  id: 1,
  name: 'Hugo Luís Santos',
  image: 'https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble_1x.png',
  birthday: 14 / 12 / 1996,
  genre: 'M',
  email: 'hhugoluissantos@hotmail.de',
  address: 'Travessa WE-86',
  latitude: 10.11266,
  longitude: 144.35276,
  phone: '(91) 98799-9038'
}

describe('Routes resumes', () => {
  const Resume = server.$database.models.Resume

  beforeEach((done) => {
    Resume
      .destroy({where: {}})
      .then(() => Resume.create(hugoLuisSantosResume))
      .then(() => done())
  })

  describe('Route GET /resumes', () => {
    it('should return a list of resumes', (done) => {
      request
        .get('/resumes')
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(hugoLuisSantosResume.id)
          expect(res.body[0].name).to.be.eql(hugoLuisSantosResume.name)
          expect(res.body[0].email).to.be.eql(hugoLuisSantosResume.email)
          done(err)
        })
    })
  })

  describe('Route GET /resumes/{id}', () => {
    it('should return a resume', (done) => {
      request
        .get('/resumes/1')
        .end((err, res) => {
          expect(res.body.id).to.be.eql(hugoLuisSantosResume.id)
          expect(res.body.name).to.be.eql(hugoLuisSantosResume.name)
          expect(res.body.email).to.be.eql(hugoLuisSantosResume.email)
          done(err)
        })
    })
  })

  after((done) => {
    Resume
      .destroy({where: {}})
      .then(() => done())
  })
})
