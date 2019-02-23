const { userCollection } = require('../mongo/collections/user-collection')
const { collection } = require('../mongo/interfaces/collection')

const resolveUser = (user) => {
  return userCollection[collection].then(coll => {
    console.log(coll)
    return coll.find().toArray((err, result) => {
      if (err) throw err
      else return result
    })
  })
}

module.exports = resolveUser
