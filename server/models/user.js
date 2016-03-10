const mongoose = require('mongoose');
const InterestSchema = require('./interest').InterestSchema;

const Schema = mongoose.Schema;

const UserSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  description: String,
  location: String,
  email: String,
  thumbnailPath: String,
  interests: [{
    interest: InterestSchema,
    rating: Number,
    status: Number,
  }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
