const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

// Schema to create User model
const userSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [reactionSchema],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User",
      name: "first"
    }]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;