const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/sales_management';
    const conn = await mongoose.connect(connStr);
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`[MongoDB] Connection Error: ${error.message}`);
    // If running in development without live MongoDB server, log warning instead of crashing app
    if (process.env.NODE_ENV === 'test') {
      throw error;
    }
    console.warn('[MongoDB] Continuing in limited mode. Ensure MONGODB_URI is accessible.');
  }
};

module.exports = connectDB;
