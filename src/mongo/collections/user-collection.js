const { connect } = require('../connect')
const { collection } = require('../interfaces/collection')
const { users } = require('../../constants/environment')
const userCollection = {
  get [collection] () {
    return connect().then((database) => database.collection(users))
      .catch(error => error)
  }
}

module.exports = { userCollection }
