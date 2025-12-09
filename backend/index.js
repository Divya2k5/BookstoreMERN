import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import bookroute from './routes/bookroute.js';

// Load environment variables from .env file
dotenv.config();

// Get configuration from environment variables
const PORT = process.env.PORT || 5555;
const mongoDBURL = process.env.MONGODB_URL;

// Validate critical environment variables
if (!mongoDBURL) {
  console.error('❌ CRITICAL ERROR: MONGODB_URL is not defined in .env file');
  console.error('Please create a .env file in the backend directory with:');
  console.error('MONGODB_URL=your_mongodb_connection_string');
  process.exit(1);
}

const app = express();

// Middleware
app.use(express.json());

// CORS Configuration
// Option 1: Allow All Origins (Development)
app.use(cors());

// Option 2: Allow Custom Origins (Production - Uncomment when deploying)
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//     credentials: true
//   })
// );

// Health check route
app.get('/', (request, response) => {
  response.status(200).json({
    message: 'BookStore API is running',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use('/sample', bookroute);

// MongoDB Connection and Server Start
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port: ${PORT}`);
      console.log(`📍 Access the API at: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  });

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled Promise Rejection:', error);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n⚠️  Shutting down gracefully...');
  await mongoose.connection.close();
  console.log('✅ MongoDB connection closed');
  process.exit(0);
});