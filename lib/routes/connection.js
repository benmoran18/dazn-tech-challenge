module.exports = app => {
  app.get('/connections/new/:userId', (req, res, next) => {

    const userId = parseInt(req.params.userId)

    // Simple parameter check for user id. Can be extended with Joi for more complexity!
    if (!userId)
      return res.status(400).json({ success: false, message: `Unauthorised access` })

    return res.json({ success: false, message: `no connections available for user ${req.params.userId}` })

  })
}
