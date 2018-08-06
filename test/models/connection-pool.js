const { expect } = require('chai')
const config = require('../../config')
const connectionPool = require('../../lib/models/connection-pool')
const userId = 123
const errors = require('../../lib/utils/errors')

describe('Connection pool', async () => {
  for(let i = 0; i < config.maximumUserConnections; i++) {
    it(`should create connection ${i+1}`, async () => {
      const connection = await connectionPool.getConnection(userId)
      expect(connection).to.have.property('userId')
      expect(connection).to.have.property('connectionId')
    })
    it(`should update the connection count to ${i + 1}`, async () => {
      expect(await connectionPool.getConnectionCount(userId)).to.equal(i+1)
    })
  }
  it('should fail getting connection because maximum has been reached', async () => {
    try {
      await connectionPool.getConnection(userId)
      return false
    } catch (error) {
      expect(error).to.be.equal(errors.CODE_MAXIMUM_CONNECTIONS)
    }
  })
})
