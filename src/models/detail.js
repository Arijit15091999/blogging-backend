const mongoose = require('mongoose')
const detailSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true
  },
  brandIconUrl: {
    type: String,
    required: true
  },
  links: [
    {
      label: {
        type: String
      },
      url: {
        type: String,
        default: '#'
      }
    }
  ]
})

const detailModel = mongoose.model('Detail', detailSchema)

module.exports = detailModel
