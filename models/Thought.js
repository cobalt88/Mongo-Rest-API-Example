import Mongoose from "mongoose";

const ThoughtSchema = new Mongoose.Schema({
  thought: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 1000,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  createdBy: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Thought = Mongoose.model("Thought", ThoughtSchema);

export default Thought;
