const create = async userId => {
  // Get connection to stream and feed back
  return {connectionId: `${userId}-${new Date().toISOString()}`, userId}
}

module.exports = { create }
