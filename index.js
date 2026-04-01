const express = require("express");

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;