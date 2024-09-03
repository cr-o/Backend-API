const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to MongoDB Atlas')
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error)
})

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.use('/api/annotations', require('./routes/annotations'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
