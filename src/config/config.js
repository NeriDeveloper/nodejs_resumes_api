module.exports = {
  database: 'books',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: './database_development.sqlite',
    define: {
      underscored: true
    }
  }
}
