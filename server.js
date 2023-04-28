import { express } from "express";
import Mongoose from "mongoose";
const url = process.env.MONGO_URI;
const PORT = process.env.PORT || 3005;

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  db.collection("restaurants").findOne({}, (findErr, result) => {
    if (findErr) throw findErr;
    console.log(result.name);
    db.close();
  });
});

const app = express();

Mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongoose Is connected");
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
