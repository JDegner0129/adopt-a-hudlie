'use strict';

const mongoose = require('mongoose');
const Interest = require('../models/interest');

class InterestCollection {
  static getInterests(query, cb) {
    Interest.find(query, cb);
  }

  static createInterests(interests, cb) {
    const filteredInterests = interests.filter(i => !i._id);

    Interest.create(filteredInterests, (err, docs) => {
      if (err) {
        cb(err);
        return;
      }

      interests.forEach(interest => {
        // if the interest was new, populate its _id with the DB result
        if (!interest._id) {
          interest._id = docs.find(d => d.name === interest.name)._id;
        }
      });

      cb(err, interests);
    });
  }
}

module.exports = InterestCollection;
