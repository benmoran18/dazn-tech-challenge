
const connectionPool = require('../models/connection-pool')
const errors = require('../utils/errors')

module.exports = app => {
  app.get('/connections/new/:userId', async (req, res, next) => {
    // Simple parameter check for user id. Can be extended with Joi for more complexity!
    if (req.params.userId == null) return res.status(400).json(errors.CODE_UNAUTHORIZED_ACCESS)

    try {
      const connection = await connectionPool.getConnection(req.params.userId)
      return res.json({ success: true, connection })
    } catch (error) {
      return res.json({ success: false, error})
    }
  })
}
