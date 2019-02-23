const { userSchema } = require('./user-schema')

const querySchema = `
    type Query {
        user(name: String): User
    }
    ${userSchema}
`

module.exports = { querySchema }
