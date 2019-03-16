const { userSchema } = require('./user-schema')

const querySchema = `
    type Query {
        users : [User]!
        user(name: String): User
    }
    ${userSchema}
`

module.exports = { querySchema }
