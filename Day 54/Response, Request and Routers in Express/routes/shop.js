const express = require('express')
const router = express.Router()

// Define the home page route
router.get('/', (req, res) => {
  res.send('shop home page')
})

// Define the about route
router.get('/about', (req, res) => {
  res.send('About shop')
})

module.exports = router
