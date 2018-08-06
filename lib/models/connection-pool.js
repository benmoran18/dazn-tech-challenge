const connection = require('./connection')
const { maximumUserConnections } = require('../../config')
const connectionStore = {}

const addConnectionForUser = async (userId, newConnection) => {
  connectionStore[userId].push(newConnection)
}

const getConnection = async userId => {

  if (Array.isArray(connectionStore[userId])) {
    if (connectionStore[userId].length === maximumUserConnections) {
      throw new Error('Maximum number of connections exceeded')
    }
  } else {
    connectionStore[userId] = []
  }

  const newConnection = await connection.create(userId)
  await addConnectionForUser(userId, newConnection)
  return newConnection
}

const getConnectionCount = async userId => (Array.isArray(connectionStore[userId]) ? connectionStore[userId].length : 0)

module.exports = {addConnectionForUser, getConnection, getConnectionCount }
