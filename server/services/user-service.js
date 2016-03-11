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

  static createUser(userInfo, callback) {
    // TODO: handle the case in which the interests already exist
    this._createAllInterests(userInfo.interests, (err, interests) => {
      if (err) {
        callback(err);
        return;
      }

      const userInterests = interests.map((i, index) => {
        return {
          interestId: i._id,
          rating: userInfo.interests[index].rating,
          status: userInfo.interests[index].status,
        };
      });

      userInfo.interests = userInterests;
      UserCollection.createUser(userInfo, callback);
    });
  }

  static _createAllInterests(interests, callback) {
    const trimmedInterests = interests.map(interest => {
      return {
        name: interest.name,
      };
    });

    InterestCollection.createInterests(trimmedInterests, callback);
  }
}

module.exports = UserService;
