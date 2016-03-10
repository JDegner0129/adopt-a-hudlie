'use strict';

const mongoose = require('mongoose');
const Interest = require('../models/interest');

class InterestCollection {
  static getInterests(query, cb) {
    Interest.find(query, cb);
  }
}

module.exports = InterestCollection;
