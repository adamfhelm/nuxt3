// server/api/index.ts

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

// Create an Express router
const router = express.Router()

// Define your API routes
router.get('/', (req, res) => {
  res.send('Hello from API!')
})

// Export the router to be used as server middleware
export default router
