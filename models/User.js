import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  thoughts: [
    {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = Mongoose.model("User", UserSchema);

export default User;
