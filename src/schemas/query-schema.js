const { userSchema } = require('./user-schema')

const querySchema = `
    type Query {
        user(name: String, age: Int): User
    }
    ${userSchema}
`

module.exports = { querySchema }
