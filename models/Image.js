const imageSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },  // Reference to Project
    createdAt: { type: Date, default: Date.now }
  });
  
  const Image = mongoose.model('Image', imageSchema);