const express = require("express");
const pool = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Test Database Connection
pool
  .connect()
  .then((client) => {
    console.log("✅ Database Connected Successfully");
    client.release();
  })
  .catch((err) => {
    console.log("❌ Database Connection Failed");
    console.error(err.message);
  });

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Blog Platform API");
});
app.use(authRoutes);
// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});