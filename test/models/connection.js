const { expect } = require('chai')
const connection = require('../../lib/models/connection')
const userId = 123

describe('Connection', async () => {
  it(`should create connection 1`, async () => {
    const connection = await connection.create(userId)
    expect(connection).to.have.property('userId')
    expect(connection).to.have.property('connectionId')
  })
})
