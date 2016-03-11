const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterestSchema = Schema({
  name: String,
  keywords: [{
    userId: Schema.Types.ObjectId,
    term: String,
  }],
});

const Interest = mongoose.model('Interest', InterestSchema);

module.exports = Interest;
