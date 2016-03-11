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

  static createUser(userInfo, cb) {
    User.create(userInfo, cb);
  }

  static updateUsers(query, update, cb) {
    User.update(query, update, cb);
  }
}

module.exports = UserCollection;
