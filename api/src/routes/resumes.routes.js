const findAll = (req, res) => {
  return res.send([
    {id: 1, value: 'test 1'},
    {id: 2, value: 'test 2'}
  ])
}

const save = (req, res) => {
  const {name} = req.params
  res.send(name)
}

module.exports = {
  findAll: findAll,
  save: save
}
