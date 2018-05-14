const findAll = (req, res) => {
  return res.send([
    {
      id: 1,
      name: 'Hugo Luís Santos',
      image: 'https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble_1x.png',
      birthday: 14 / 12 / 1996,
      genre: 'M',
      email: 'hhugoluissantos@hotmail.de',
      address: 'Travessa WE-86',
      latitude: 10.11266,
      longitude: 144.35276,
      telefone: '(91) 98799-9038',
      tags: [
        {id: 1, name: 'front-end'},
        {id: 2, name: 'javascript'}
      ],
      exp: [
        {
          id: 1,
          office: 'El Delivery Ltda',
          company: 'El Delivery Ltda',
          address: 'Rua Felício Tomazini',
          of: '2/2016',
          upUntil: '11/2018',
          title: 'Senior Software Developer',
          description: 'Lorem ipsum per libero porta augue netus ad mi curabitur quis hac eget...',
          current: true
        }
      ],
      academic: [
        {
          id: 41241,
          institution: 'Blá blá blá',
          formation: 'Sofware Developer',
          studyArea: 'Information systems',
          of: 2011,
          upUntil: 2016
        }
      ]
    }
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
