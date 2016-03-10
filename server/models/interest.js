const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterestSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  ranking: Number,
  availability: Boolean,
});

const Interest = mongoose.model('Interest', InterestSchema);

module.exports = Interest;
