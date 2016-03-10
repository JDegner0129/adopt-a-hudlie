const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  description: String,
  location: String,
  email: String,
  thumbnailPath: String,
  interests: [{
    interestId: Schema.Types.ObjectId,
    rating: Number,
    status: Number,
  }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
