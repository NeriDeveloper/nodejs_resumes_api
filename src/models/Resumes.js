const resumeModel = (sequelize, DataType) => {
  const resume = sequelize.define('Resume', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    image: {
      type: DataType.STRING
    },
    birthday: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    genre: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 1,
        max: 1
      }
    },
    email: {
      type: DataType.STRING,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    address: {
      type: DataType.STRING,
      validate: {
        notEmpty: true
      }
    },
    latitude: {
      type: DataType.INTEGER
    },
    longitude: {
      type: DataType.INTEGER
    },
    phone: {
      type: DataType.STRING,
      validate: {
        notEmpty: true
      }
    }
  })

  return resume
}

module.exports = resumeModel
