const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  h1: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    unique: true,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String
  }
})

module.exports = mongoose.model('Service', serviceSchema)
