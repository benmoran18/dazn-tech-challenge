const create = async userId => ({ connectionId: `${userId}-${new Date().toISOString()}`, userId })

module.exports = { create }
