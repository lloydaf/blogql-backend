const { userCollection } = require('../mongo/collections/user-collection')
const { collection } = require('../mongo/interfaces/collection')

async function resolveUser (user) {
  const collectionObject = await userCollection[collection]
  const users = await collectionObject.find().toArray()
  return users || []
}

module.exports = resolveUser
