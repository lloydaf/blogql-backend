const MongoClient = require('mongodb').MongoClient
const { clientUrl, db } = require('../constants/environment')
const connect = () => {
  return MongoClient.connect(clientUrl).then((err, client) => {
    if (err) throw err
    return client.db(db)
  })
}

module.exports = { connect }
