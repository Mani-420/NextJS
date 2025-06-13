import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
    connection.isConnected = db.connections[0].readyState;
    console.log('Database connected successfully:');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
}

export default dbConnect;
// This function ensures that the database connection is established only once
// and can be reused across different parts of the application.
// It also handles errors gracefully and logs the connection status.
