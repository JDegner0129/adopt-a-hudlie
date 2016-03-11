const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmbeddedInterestSchema = Schema({
  interestId: Schema.Types.ObjectId,
  name: String,
  rating: Number,
  canMentor: Boolean,
  needsMentor: Boolean,
}, { _id: false });

const UserSchema = Schema({
  name: String,
  description: String,
  location: String,
  email: String,
  interests: [EmbeddedInterestSchema],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
