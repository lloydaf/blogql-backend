const { UserResolver } = require('./user-resolver')

// The root provides a resolver function for each API endpoint
const rootResolver = {
  user: ({ name, age }) => {
    return new UserResolver(name, age)
  }
}

module.exports = { rootResolver }
