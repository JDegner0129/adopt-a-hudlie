const mongoose = require('mongoose');

// TODO: centralize this connection and export to a config var
mongoose.connect('mongodb://localhost/adoptahudlie');

module.exports = {
  InterestCollection: require('./interest-collection'),
  UserCollection: require('./user-collection'),
};
