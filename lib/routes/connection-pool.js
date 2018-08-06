
const connectionPool = require('../models/connection-pool')

module.exports = app => {
  app.get('/connections/new/:userId', async (req, res, next) => {

    const userId = parseInt(req.params.userId)

    // Simple parameter check for user id. Can be extended with Joi for more complexity!
    if (!userId)
      return res.status(400).json({ success: false, message: `Unauthorised access` })

    try {
      const connection = await connectionPool.getConnection(req.params.userId)
      return res.json({ success: true, connection})
    } catch (error) {
      console.log('ERROR:', error)
      return res.json({ success: false, error })
    }
  })
}
