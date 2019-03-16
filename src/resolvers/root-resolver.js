const resolveUser = require('./user-resolver')
// The root provides a resolver function for each API endpoint
const rootResolver = {
  users: () => {
    return resolveUser()
  }
}

module.exports = { rootResolver }
