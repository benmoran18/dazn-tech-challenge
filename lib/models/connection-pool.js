const connection = require('./connection')
const { maximumUserConnections } = require('../../config')
const connectionStore = {}

const getConnection = async userId => {
  if(connectionStore.hasOwnProperty(userId)) {
    if(connectionStore[userId].length === maximumUserConnections) {
      throw 'Maximum number of connections exceeded'
    }
  } else {
    connectionStore[userId] = []
  }

  const newConnection = await connection.create(userId)
  connectionStore[userId].push(newConnection)
  return newConnection
}

const getConnectionCount = async userId => connectionStore.hasOwnProperty(userId) ? connectionStore[userId].length : 0

module.exports = { getConnection, getConnectionCount }
