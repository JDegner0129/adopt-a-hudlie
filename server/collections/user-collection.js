'use strict';

const mongoose = require('mongoose');
const User = require('../models/user');

class UserCollection {
  static getUsers(query, cb) {
    User.find(query, cb);
  }
}

module.exports = UserCollection;
