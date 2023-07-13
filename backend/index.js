import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import { useNavigate } from 'react-router-dom';

// const navigation = useNavigate();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
    "mongodb://rk48575294:YBo0a8yEzAwpW1Jh@ac-lyalqjc-shard-00-00.ixp89lk.mongodb.net:27017,ac-lyalqjc-shard-00-01.ixp89lk.mongodb.net:27017,ac-lyalqjc-shard-00-02.ixp89lk.mongodb.net:27017/?ssl=true&replicaSet=atlas-b3b6ej-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB started");
  })
  .catch(() => {
    console.log("unable to connect");
  });

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const check = await User.countDocuments();
console.log(check);

app.post("/", async (req, res) => {
  // res.send("MY API Login");
  try {
    const check = await User.findOne(
      { username: req.body.username }
    );

    if (check === null) {
      res.send({ message: "user not registered" });
    } else {
      if (check.password === req.body.password) {
        res.send({ message: "user registered" });
      } else {
        res.send({message : "wrong password"});
      }
    }
  } catch (error) {}
});

app.post("/register", async (req, res) => {
  try {
    console.log(req.body);

    const check = await User.findOne({ username: req.body.username });
    // console.log(check);
    if (check === null) {
      const user = new User(req.body);
      user.save();
      res.send({ message: "successfully registered" });
      // user.save();
      // res.redirect()
    } else {
      res.send({ message: "user already registered" });
    }
  } catch (err) {
    res.send("wrong details");
    console.log(err);
  }
});

app.listen(8000, () => {
  console.log("PORT Started successfully at 8000");
});
