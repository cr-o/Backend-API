const imageSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }
  });
  
  const Image = mongoose.model('Image', imageSchema);