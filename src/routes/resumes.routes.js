const findAll = (req, res) => {
  const Resume = req.$database.models.Resume

  return Resume.findAll({})
    .then(data => res.json(data))
    .catch(() => res.status(412))
}

const findOne = (req, res) => {
  const Resume = req.$database.models.Resume

  return Resume
    .findOne({where: req.params})
    .then(data => res.json(data))
    .catch(() => res.status(412))
}

const save = (req, res) => {
  const {name} = req.params
  res.send(name)
}

module.exports = {
  findAll: findAll,
  findOne: findOne,
  save: save
}
