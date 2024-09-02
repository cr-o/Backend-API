const mongoose = require('mongoose');

const annotationSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  label: { type: String, required: true },
  maskData: { type: String, required: true },
  area: { type: Number, required: true },
  annotator: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Annotation', annotationSchema);