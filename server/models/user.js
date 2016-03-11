const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  description: String,
  location: String,
  email: String,
  thumbnailPath: String,
  interests: [{
    interestId: Schema.Types.ObjectId,
    rating: Number,
    status: Number,
    name: String,
    keywords: [{
      userId: Schema.Types.ObjectId,
      term: String,
    }],
  }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
