const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterestSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  keywords: [{
    userId: Schema.Types.ObjectId,
    term: String,
  }],
});

const Interest = mongoose.model('Interest', InterestSchema);

module.exports = {
  InterestSchema: InterestSchema,
  Interest: Interest,
};
