'use strict';

const collections = require('../collections');
const UserCollection = collections.UserCollection;
const InterestCollection = collections.InterestCollection;

class UserService {
  static getUser(userId, callback) {
    UserCollection.getUser({ _id: userId }, (err, user) => {
      if (err) throw err;

      const interestIds = user.interests.map(i => i.interestId) || [];

      // If the user has any interests, map those back onto the JSON we return
      if (interestIds.length) {
        InterestCollection.getInterests({ _id: { $in: interestIds } }, (err, interests) => {
          if (err) throw err;

          user.interests = interests;
          callback(err, user);
        });
      } else {
        callback(err, user);
      }
    });
  }
}

module.exports = UserService;
