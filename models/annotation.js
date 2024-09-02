const mongoose = require('mongoose')
const calculateArea = require('../utils/calculateArea')

const annotationSchema = new mongoose.Schema({
  label: { type: String, required: true },
  maskData: { type: String, required: true },
  area: { type: Number, required: true },
  annotator: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'SegmentationSystem' })

annotationSchema.pre('save', function (next) { // calculate area of maskData before saving to db
  if (this.isModified('maskData')) {
    this.area = calculateArea(this.maskData)
  }
  next()
})

module.exports = mongoose.model('Annotation', annotationSchema)
