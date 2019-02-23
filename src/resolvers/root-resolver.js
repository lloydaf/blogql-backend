const { User } = require('../models/user')
const resolveUser = require('./user-resolver')
// The root provides a resolver function for each API endpoint
const rootResolver = {
  user: ({ name }) => {
    return resolveUser(new User(name))
  }
}

module.exports = { rootResolver }
