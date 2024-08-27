// server/mongoose.js

import mongoose from 'mongoose'

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
  }
}

export default connect
