const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL); 
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); 
  }
}

connectDB();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

//AUTHENTICATION(So sánh password)
//AUTHORIZATION(Kiểm tra quyền)
