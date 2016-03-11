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

          user.interests = this._toUserInterests(interests, user.interests);
          callback(err, user);
        });
      } else {
        callback(err, user);
      }
    });
  }

  static createUser(userInfo, callback) {
    // check if a user exists with the specified email, and if so, return that document
    UserCollection.getUser({ email: (userInfo.email || '') }, (err, user) => {
      if (user) {
        callback(err, user);
        return;
      }

      this._createAllInterests(userInfo.interests, (err, interests) => {
        if (err) {
          callback(err);
          return;
        }

        userInfo.interests = this._toUserInterests(interests, userInfo.interests);
        UserCollection.createUser(userInfo, callback);
      });
    });
  }

  static updateUser(userInfo, callback) {
    this._createAllInterests(userInfo.interests, (err, interests) => {
      if (err) {
        callback(err);
        return;
      }

      const update = {
        interests: this._toUserInterests(interests, userInfo.interests),
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

  static _toUserInterests(interests, userInterests) {
    return interests.map((i, index) => {
      return {
        interestId: i._id,
        rating: userInterests[index].rating,
        canMentor: userInterests[index].canMentor,
        needsMentor: userInterests[index].needsMentor,
      };
    });
  }

  static _createAllInterests(interests, callback) {
    if (!interests) {
      interests = [];
    }

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
