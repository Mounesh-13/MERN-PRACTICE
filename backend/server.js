const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection URL (Replace with your actual MongoDB URI)
const mongoURI = "mongodb+srv://myBlogUser:MySecurePassword123!@myblogcluster.twjnz.mongodb.net/?retryWrites=true&w=majority&appName=MyBlogCluster";

// MongoDB Connection with increased timeout
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    console.log('Database connection failed', err);
    process.exit(1); // Exit if the connection fails
  });

// Test route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
