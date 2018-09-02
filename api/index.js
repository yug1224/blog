const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const archives = require('./routes/archives')
const categories = require('./routes/categories')
const pages = require('./routes/pages')

// Import API Routes
app.use(archives)
app.use(categories)
app.use(pages)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
