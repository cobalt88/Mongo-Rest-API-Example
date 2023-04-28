import { express } from "express";
import { MongoClient } from "mongodb";
const url = process.env.MONGO_URI;

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  db.collection("restaurants").findOne({}, (findErr, result) => {
    if (findErr) throw findErr;
    console.log(result.name);
    db.close();
  });
});

const app = express();

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
