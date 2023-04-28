import express from "express";
import Mongoose from "mongoose";
import api from "./api/index.js";
import * as dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGO_URI;
const PORT = process.env.PORT || 3005;

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
