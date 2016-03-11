const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmbeddedInterestSchema = Schema({
  interestId: Schema.Types.ObjectId,
  rating: Number,
  status: Number,
  name: String,
  keywords: [{
    userId: Schema.Types.ObjectId,
    term: String,
  }],
}, { _id: false });

const UserSchema = Schema({
  name: String,
  description: String,
  location: String,
  email: String,
  thumbnailPath: String,
  interests: [EmbeddedInterestSchema],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
