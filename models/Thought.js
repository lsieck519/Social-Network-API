const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionID: {},
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // Use a getter method to format the timestamp on query
});


const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, maxlength: 280 },
  createdAt: { type: Date, default: Date.now }, // Use a getter method to format the timestamp on query
  username: { type: String, required: true },
  reactions: [reactionSchema],
});

// TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = mongoose.model("Thought", thoughtSchema);
module.exports = Thought; 