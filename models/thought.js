const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtName: {
      type: String,
      required: true,
    },
    Date: {
      type: Date,
      default: Date.now(),
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;