const { expect } = require('chai')
const connectionModel = require('../../lib/models/connection')
const userId = 123

describe('Connection', async () => {
  it(`should create connection object`, async () => {
    const connection = await connectionModel.create(userId)
    expect(connection).to.have.property('userId')
    expect(connection).to.have.property('connectionId')
  })
})
