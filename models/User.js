const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types
// User Schema
const UserSchema = new Schema({

    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now()
    },
    isFriend: {
      type: Boolean,
      default: false
    }
  });

module.exports = User = mongoose.model('User', UserSchema);
