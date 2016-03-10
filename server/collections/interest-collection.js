'use strict';

const mongoose = require('mongoose');
const Interest = require('../models/interest');

class InterestCollection {
  static getInterests(cb) {
    // TODO: centralize this connection and export to a config var
    mongoose.connect('mongodb://localhost/adoptahudlie');

    mongoose.connection.once('open', () => {
      Interest.find(cb);
    });
  }
}

module.exports = InterestCollection;
