const express = require("express");

const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/contact", (req, res) => {
  console.log(req.body);

  res.status(200).json({
    success: true,
    message: "Message received",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
