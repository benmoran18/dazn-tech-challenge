module.exports = app => {
  app.get('/connection', (req, res, next) => {
    res.json({success: false, message:'no connections available'})
  })
}
