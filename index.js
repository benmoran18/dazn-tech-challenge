const express = require('express')
const app = express()

app.get('/connection', (req, res, next) => {
  res.json({success: false, message:'not yet implemented'})
})

app.listen(9000, () => console.log('Listening...'))
