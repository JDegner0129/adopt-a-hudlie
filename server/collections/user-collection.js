'use strict';

const mongoose = require('mongoose');
const User = require('../models/user');

class UserCollection {
  static getUsers(query, cb) {
    User.find(query, cb);
  }

  static getUser(query, cb) {
    User.findOne(query, cb);
  }
}

module.exports = UserCollection;
