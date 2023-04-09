const { Schema, model, Types } = require("mongoose");
const moment = require('moment')

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // To-do: dateFormat
      get: createdAtVal =>
        moment(createdAtVal)
        .format("MMMM Do YYYY")
    },
  },
  {
    toJson: {
      getters: true,
    },
  }
);


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // To-do: dateFormat
      get: createdAtVal =>
        moment(createdAtVal)
        .format("MMMM Do YYYY")
    }, 
    username: {
      type: String,
      required: true
    },
  reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);


thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought; 