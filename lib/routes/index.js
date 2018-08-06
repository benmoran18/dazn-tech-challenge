const connectionPoolRoutes = require('./connection-pool')

module.exports = app => {
  connectionPoolRoutes(app)
}
