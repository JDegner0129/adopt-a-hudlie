'use strict';

const collections = require('../collections');
const UserCollection = collections.UserCollection;
const InterestCollection = collections.InterestCollection;

class UserService {
  static getUser(userId, callback) {
    UserCollection.getUser({ _id: userId }, (err, user) => {
      if (err) {
        callback(err);
        return;
      }

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

  static updateUser(userInfo, callback) {
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

      const update = {
        interests: userInterests,
      };

      if (userInfo.name) {
        update.name = userInfo.name;
      }
      if (userInfo.description) {
        update.description = userInfo.description;
      }
      if (userInfo.location) {
        update.location = userInfo.location;
      }
      if (userInfo.email) {
        update.email = userInfo.email;
      }

      UserCollection.updateUsers({ _id: userInfo._id }, update, callback);
    });
  }

  static _createAllInterests(interests, callback) {
    const trimmedInterests = interests.map(interest => {
      const newInterest = {
        name: interest.name,
      };

      if (interest.interestId) {
        newInterest._id = interest.interestId;
      }

      return newInterest;
    });

    InterestCollection.createInterests(trimmedInterests, callback);
  }
}

module.exports = UserService;
